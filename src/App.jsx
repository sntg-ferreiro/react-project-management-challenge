import { useState } from "react";
import { NoProjectPage } from "./components/NoProjectPage";
import { ProjectPage } from "./components/ProjectPage";
import { Sidebar } from "./components/Sidebar";
import { CreateProjectForm } from "./components/CreateProjectForm";

const base_list = [
  {
    id: 0,
    tasks: [],
    title: "projecto 1",
    due_date: "26-02-2024",
  },
  {
    id: 1,
    tasks: ["hacer cosa", "hacer cosa 2"],
    title: "projecto 2",
    due_date: "28-02-2024",
  },
  {
    id: 2,
    tasks: ["hacer cosa", "hacer cosa 2"],
    title: "projecto 3",
    due_date: "29-02-2024",
  },
];

function App() {
  const [projectSelected, setProjectSelected] = useState(undefined);
  const [projectsList, setProjectsList] = useState(base_list);

  const handleSelectProject = (project) => {
    setProjectSelected(project);
  };

  const handleAddProject = () => {
    setProjectSelected(null);
  };

  const handleDeselectProject = () => {
    setProjectSelected(undefined);
  };

  const handleDeleteProject = () => {
    setProjectsList((prevList) =>
      prevList.filter((p) => p.id !== projectSelected.id)
    );
    setProjectSelected(undefined);
  };

  const onAddTask = (text) => {
    setProjectsList((prevList) => {
      let proj = prevList.filter((p) => projectSelected.id === p.id)[0];
      proj.tasks.push(text);
      return prevList;
    });
    setProjectSelected(prev => prev)
  };

  const onDeleteTask = (id) => {
    setProjectSelected(prev => prev.tasks.filter(t => prev.tasks.indexOf(t) !== id));
  }

  const handleSaveProject = (project) => {
    setProjectsList(prev => {
      return [project, ...prev]
    })
  }

  let content = !projectSelected ? (
    <NoProjectPage handleAddProject={handleAddProject} />
  ) : (
    <ProjectPage
      project={projectSelected}
      handleDeleteProject={handleDeleteProject}
      onAddTask={onAddTask}
      onDeleteTask={onDeleteTask}
    />
  );

  if (projectSelected === null) {
    content = (
      <CreateProjectForm onSave={handleSaveProject} handleDeselectProject={handleDeselectProject} />
    );
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold"></h1>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          handleAddProject={handleAddProject}
          handleSelectProject={handleSelectProject}
          projects={projectsList}
        />
        {content}
      </main>
    </>
  );
}

export default App;
