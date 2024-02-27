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
    tasks: [
      { id: 0, text: "hacer cosa" },
      { id: 1, text: "hacer cosa2" },
      { id: 2, text: "hacer cosa22" },
    ],
    title: "projecto 2",
    due_date: "28-02-2024",
  },
  {
    id: 2,
    tasks: [
      { id: 0, text: "hacer cosa" },
      { id: 1, text: "hacer cosa2" },
      { id: 2, text: "hacer cosa22" },
    ],
    title: "projecto 3",
    due_date: "29-02-2024",
  },
];

const base_state = {
  selected_project_id: undefined,
  project_list: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(base_state);

  const handleSelectProject = (id) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selected_project_id: id,
      };
    });
  };

  const handleAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selected_project_id: null,
      };
    });
  };

  const handleDeselectProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selected_project_id: undefined,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => {
      let list = prev.project_list.filter(
        (p) => p.id !== prev.selected_project_id
      );
      return {
        selected_project_id: undefined,
        project_list: list,
      };
    });
  };

  const onAddTask = (task) => {
    setProjectsState((prev) => {
      let proj = prev.project_list.find(
        (p) => prev.selected_project_id === p.id
      );
      proj.tasks = [task, ...proj.tasks];
      return {
        ...prev,
      };
    });
  };

  const onDeleteTask = (id) => {
    setProjectsState((prev) => {
      let proj = prev.project_list.find(
        (p) => prev.selected_project_id === p.id
      );
      proj.tasks = proj.tasks.filter((t) => t.id !== id);
      return {
        ...prev,
      };
    });
  };

  const handleSaveProject = (project) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selected_project_id: project.id,
        project_list: [project, ...prev.project_list],
      };
    });
  };

  let content = undefined;

  if (projectsState.selected_project_id === undefined) {
    content = <NoProjectPage handleAddProject={handleAddProject} />;
  } else if (projectsState.selected_project_id === null) {
    content = (
      <CreateProjectForm
        onSave={handleSaveProject}
        handleDeselectProject={handleDeselectProject}
      />
    );
  } else {
    let selected = projectsState.project_list.find(
      (p) => p.id === projectsState.selected_project_id
    );
    content = (
      <ProjectPage
        project={selected}
        handleDeleteProject={handleDeleteProject}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    );
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold"></h1>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          handleAddProject={handleAddProject}
          handleSelectProject={handleSelectProject}
          projects={projectsState.project_list}
          idSelected={projectsState.selected_project_id}
        />
        {content}
      </main>
    </>
  );
}

export default App;
