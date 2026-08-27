import React, { useMemo, useState } from "react";
import { Download, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react";
import { useWorkspace } from "../../context/WorkspaceContext";

const emptyProject = { name: "", description: "" };
const emptyRequirement = {
  title: "",
  description: "",
  priority: "Medium",
  status: "Planned",
  userStory: "",
};

function ProjectWorkspace({ view = "projects" }) {
  const { projects, createProject, renameProject, deleteProject, addRequirement } = useWorkspace();
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [requirementForm, setRequirementForm] = useState(emptyRequirement);
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || "");
  const [query, setQuery] = useState("");
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showRequirementForm, setShowRequirementForm] = useState(false);

  const selectedProject = projects.find((project) => project.id === selectedProjectId) || projects[0];
  const requirements = (selectedProject?.requirements || []).filter((requirement) =>
    `${requirement.title} ${requirement.description}`.toLowerCase().includes(query.toLowerCase()),
  );
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.name.toLowerCase().includes(query.toLowerCase())),
    [projects, query],
  );

  const handleProjectSubmit = (event) => {
    event.preventDefault();
    if (!projectForm.name.trim()) return;
    const project = createProject(projectForm);
    setSelectedProjectId(project.id);
    setProjectForm(emptyProject);
    setShowProjectForm(false);
  };

  const handleRequirementSubmit = (event) => {
    event.preventDefault();
    if (!selectedProject || !requirementForm.title.trim()) return;
    addRequirement(selectedProject.id, requirementForm);
    setRequirementForm(emptyRequirement);
    setShowRequirementForm(false);
  };

  const exportProject = () => {
    if (!selectedProject) return;
    const file = new Blob([JSON.stringify(selectedProject, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedProject.name.toLowerCase().replace(/\s+/g, "-")}-workspace.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {view === "projects" ? (
        <section className="rounded-[30px] border border-[#e7e7e2] bg-white p-7 shadow-[0_20px_60px_rgba(17,17,17,0.04)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">Product workspace</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[0.02em] text-[#111111]">Projects</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#666666]">A persistent home for product decisions, requirements, flows, screens, and system artifacts.</p>
            </div>
            <button onClick={() => setShowProjectForm(true)} className="flex items-center gap-2 rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#2a2a2a]">
              <Plus size={14} /> New project
            </button>
          </div>

          {showProjectForm && (
            <form onSubmit={handleProjectSubmit} className="mt-7 grid gap-3 rounded-2xl border border-[#e7e7e2] bg-[#f8f8f6] p-4 sm:grid-cols-[1fr_1.5fr_auto] sm:items-end">
              <label className="text-xs font-medium text-[#444444]">Project name<input autoFocus value={projectForm.name} onChange={(event) => setProjectForm({ ...projectForm, name: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]" placeholder="e.g. Customer Analytics" /></label>
              <label className="text-xs font-medium text-[#444444]">Description<input value={projectForm.description} onChange={(event) => setProjectForm({ ...projectForm, description: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]" placeholder="What are you building?" /></label>
              <button className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white">Create</button>
            </form>
          )}

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <button key={project.id} onClick={() => setSelectedProjectId(project.id)} className={`group text-left rounded-2xl border p-5 transition ${selectedProject?.id === project.id ? "border-[#111111] bg-[#f8f8f6]" : "border-[#e7e7e2] bg-white hover:border-[#bdbdb7]"}`}>
                <div className="flex items-start justify-between gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111111] text-sm font-semibold text-white">{project.name.charAt(0).toUpperCase()}</span><MoreHorizontal size={17} className="text-[#8a8a85]" /></div>
                <h3 className="mt-5 text-lg font-semibold text-[#111111]">{project.name}</h3>
                <p className="mt-2 min-h-10 text-xs leading-5 text-[#777777]">{project.description || "No description yet."}</p>
                <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-[#8a8a85]"><span>{project.requirements.length} requirements</span><span>{project.updatedAt}</span></div>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="rounded-[30px] border border-[#e7e7e2] bg-white p-7 shadow-[0_20px_60px_rgba(17,17,17,0.04)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">Structured product data</p><h2 className="mt-2 text-3xl font-bold tracking-[0.02em] text-[#111111]">Requirements</h2><p className="mt-2 text-sm leading-6 text-[#666666]">Turn product intent into clear, reviewable work for every screen and flow.</p></div>
            <div className="flex flex-wrap gap-2"><button onClick={exportProject} disabled={!selectedProject} className="flex items-center gap-2 rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-xs font-medium text-[#333333] disabled:opacity-40"><Download size={14} /> Export JSON</button><button onClick={() => setShowRequirementForm(true)} disabled={!selectedProject} className="flex items-center gap-2 rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white disabled:opacity-40"><Plus size={14} /> Add requirement</button></div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-[220px_1fr]">
            <label className="text-xs font-medium text-[#444444]">Project<select value={selectedProject?.id || ""} onChange={(event) => setSelectedProjectId(event.target.value)} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm outline-none"><option value="" disabled>Select a project</option>{projects.map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}</select></label>
            <label className="text-xs font-medium text-[#444444]">Search requirements<div className="mt-2 flex items-center gap-2 rounded-xl border border-[#deded8] bg-white px-3 py-2.5"><Search size={14} className="text-[#8a8a85]" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full text-sm outline-none" placeholder="Search requirements" /></div></label>
          </div>

          {showRequirementForm && <form onSubmit={handleRequirementSubmit} className="mt-6 grid gap-3 rounded-2xl border border-[#e7e7e2] bg-[#f8f8f6] p-4 md:grid-cols-2"><label className="text-xs font-medium text-[#444444]">Title<input autoFocus value={requirementForm.title} onChange={(event) => setRequirementForm({ ...requirementForm, title: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]" placeholder="Requirement title" /></label><label className="text-xs font-medium text-[#444444]">Description<input value={requirementForm.description} onChange={(event) => setRequirementForm({ ...requirementForm, description: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]" placeholder="What should be built?" /></label><label className="text-xs font-medium text-[#444444]">Priority<select value={requirementForm.priority} onChange={(event) => setRequirementForm({ ...requirementForm, priority: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm"><option>Low</option><option>Medium</option><option>High</option></select></label><label className="text-xs font-medium text-[#444444]">Status<select value={requirementForm.status} onChange={(event) => setRequirementForm({ ...requirementForm, status: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm"><option>Planned</option><option>In Progress</option><option>Complete</option></select></label><label className="text-xs font-medium text-[#444444] md:col-span-2">User story<input value={requirementForm.userStory} onChange={(event) => setRequirementForm({ ...requirementForm, userStory: event.target.value })} className="mt-2 w-full rounded-xl border border-[#deded8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#111111]" placeholder="As a user, I want..." /></label><div className="flex gap-2 md:col-span-2"><button className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white">Save requirement</button><button type="button" onClick={() => setShowRequirementForm(false)} className="rounded-xl border border-[#deded8] bg-white px-4 py-2.5 text-xs font-medium text-[#333333]">Cancel</button></div></form>}

          <div className="mt-7 space-y-3">{requirements.length ? requirements.map((requirement) => <article key={requirement.id} className="rounded-2xl border border-[#e7e7e2] bg-[#f8f8f6] p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-base font-semibold text-[#111111]">{requirement.title}</h3><p className="mt-1 text-sm leading-5 text-[#666666]">{requirement.description}</p></div><div className="flex gap-2 text-[10px] uppercase tracking-[0.14em]"><span className="rounded-lg bg-[#111111] px-2.5 py-1.5 text-white">{requirement.priority}</span><span className="rounded-lg border border-[#deded8] bg-white px-2.5 py-1.5 text-[#666666]">{requirement.status}</span></div></div>{requirement.userStory && <p className="mt-4 border-l-2 border-[#111111] pl-3 text-xs italic leading-5 text-[#666666]">{requirement.userStory}</p>}</article>) : <div className="rounded-2xl border border-dashed border-[#d8d8d2] p-10 text-center text-sm text-[#777777]">No requirements in this project yet.</div>}</div>
        </section>
      )}

      {view === "projects" && selectedProject && <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#e7e7e2] bg-[#f8f8f6] px-4 py-3"><span className="text-xs text-[#666666]">Selected: <strong className="text-[#111111]">{selectedProject.name}</strong></span><div className="flex gap-2"><button onClick={() => { const name = window.prompt("Rename project", selectedProject.name); if (name?.trim()) renameProject(selectedProject.id, name); }} className="rounded-lg border border-[#deded8] bg-white px-3 py-1.5 text-xs text-[#444444]">Rename</button><button onClick={() => { if (projects.length > 1 && window.confirm("Delete this project?")) deleteProject(selectedProject.id); }} disabled={projects.length <= 1} className="flex items-center gap-1 rounded-lg border border-[#ead8d8] bg-white px-3 py-1.5 text-xs text-[#9a4040] disabled:opacity-40"><Trash2 size={12} /> Delete</button></div></div>}
    </div>
  );
}

export default ProjectWorkspace;
