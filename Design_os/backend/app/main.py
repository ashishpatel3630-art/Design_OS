from datetime import datetime
from typing import Generator

from fastapi import Depends, FastAPI, HTTPException
from pydantic import BaseModel, ConfigDict
from sqlalchemy import DateTime, ForeignKey, String, Text, create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column, relationship, sessionmaker

import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+psycopg://design_os:design_os@localhost:5432/design_os")
engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


class Base(DeclarativeBase):
    pass


class Project(Base):
    __tablename__ = "projects"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(160))
    description: Mapped[str] = mapped_column(Text, default="")
    status: Mapped[str] = mapped_column(String(40), default="Active")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    requirements: Mapped[list["Requirement"]] = relationship(back_populates="project", cascade="all, delete-orphan")


class Requirement(Base):
    __tablename__ = "requirements"
    id: Mapped[int] = mapped_column(primary_key=True)
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.id"))
    title: Mapped[str] = mapped_column(String(200))
    description: Mapped[str] = mapped_column(Text, default="")
    priority: Mapped[str] = mapped_column(String(40), default="Medium")
    status: Mapped[str] = mapped_column(String(40), default="Planned")
    user_story: Mapped[str] = mapped_column(Text, default="")
    project: Mapped[Project] = relationship(back_populates="requirements")


class ProjectInput(BaseModel):
    name: str
    description: str = ""


class RequirementInput(BaseModel):
    title: str
    description: str = ""
    priority: str = "Medium"
    status: str = "Planned"
    user_story: str = ""


class RequirementOutput(RequirementInput):
    model_config = ConfigDict(from_attributes=True)
    id: int
    project_id: int


class ProjectOutput(ProjectInput):
    model_config = ConfigDict(from_attributes=True)
    id: int
    status: str
    requirements: list[RequirementOutput] = []


app = FastAPI(title="Design OS API", version="0.1.0")


def get_session() -> Generator[Session, None, None]:
    with SessionLocal() as session:
        yield session


@app.on_event("startup")
def create_tables() -> None:
    Base.metadata.create_all(engine)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "design-os-api"}


@app.get("/api/projects", response_model=list[ProjectOutput])
def list_projects(session: Session = Depends(get_session)) -> list[Project]:
    return list(session.scalars(select(Project).order_by(Project.created_at.desc())))


@app.post("/api/projects", response_model=ProjectOutput, status_code=201)
def create_project(payload: ProjectInput, session: Session = Depends(get_session)) -> Project:
    project = Project(name=payload.name.strip(), description=payload.description.strip())
    if not project.name:
        raise HTTPException(status_code=422, detail="Project name is required")
    session.add(project)
    session.commit()
    session.refresh(project)
    return project


@app.post("/api/projects/{project_id}/requirements", response_model=RequirementOutput, status_code=201)
def create_requirement(project_id: int, payload: RequirementInput, session: Session = Depends(get_session)) -> Requirement:
    if session.get(Project, project_id) is None:
        raise HTTPException(status_code=404, detail="Project not found")
    requirement = Requirement(project_id=project_id, title=payload.title.strip(), description=payload.description.strip(), priority=payload.priority, status=payload.status, user_story=payload.user_story.strip())
    if not requirement.title:
        raise HTTPException(status_code=422, detail="Requirement title is required")
    session.add(requirement)
    session.commit()
    session.refresh(requirement)
    return requirement
