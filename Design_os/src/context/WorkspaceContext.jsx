import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const WorkspaceContext = createContext(null);

const initialProjects = [
  {
    id: "project-design-os",
    name: "Design OS",
    description: "The product engineering workspace for consistent digital experiences.",
    status: "Active",
    updatedAt: "Today",
    requirements: [
      {
        id: "requirement-workspace",
        title: "Product workspace foundation",
        description: "Organize requirements, flows, screens, and design decisions in one place.",
        priority: "High",
        status: "In Progress",
        userStory: "As a design lead, I want one source of truth so that product work stays aligned.",
        acceptanceCriteria: ["Projects persist between sessions", "Artifacts are linked to a project"],
      },
    ],
  },
];

export function WorkspaceProvider({ children }) {
  const [workspaceName, setWorkspaceName] = useState("Design OS Studio");
  const [projects, setProjects] = useState(() => {
    try {
      const savedProjects = localStorage.getItem("design-os-projects");
      return savedProjects ? JSON.parse(savedProjects) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  useEffect(() => {
    localStorage.setItem("design-os-projects", JSON.stringify(projects));
  }, [projects]);

  const createProject = (project) => {
    const nextProject = {
      id: `project-${Date.now()}`,
      name: project.name.trim(),
      description: project.description.trim(),
      status: "Active",
      updatedAt: "Just now",
      requirements: [],
    };
    setProjects((currentProjects) => [nextProject, ...currentProjects]);
    return nextProject;
  };

  const renameProject = (projectId, name) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId ? { ...project, name: name.trim(), updatedAt: "Just now" } : project,
      ),
    );
  };

  const deleteProject = (projectId) => {
    setProjects((currentProjects) => currentProjects.filter((project) => project.id !== projectId));
  };

  const addRequirement = (projectId, requirement) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              updatedAt: "Just now",
              requirements: [
                ...project.requirements,
                { ...requirement, id: `requirement-${Date.now()}`, acceptanceCriteria: requirement.acceptanceCriteria || [] },
              ],
            }
          : project,
      ),
    );
  };

  const value = useMemo(
    () => ({
      workspaceName,
      setWorkspaceName,
      projects,
      projectCount: projects.length,
      createProject,
      renameProject,
      deleteProject,
      addRequirement,
    }),
    [workspaceName, projects],
  );

  return (
    <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }

  return context;
}
