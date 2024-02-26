import { useState } from "react";
import { NoProjectPage } from "./components/NoProjectPage";
import { ProjectPage } from "./components/ProjectPage";
import { Sidebar } from "./components/Sidebar";
import { CreateProjectForm } from "./components/CreateProjectForm";


function App() {
  const [projectSelected, setProjectSelected] = useState(undefined);

  const handleSelectProject = (project) => {
    setProjectSelected(project);
  };

  //items-center justify-between
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold"></h1>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar handleSelectProject={handleSelectProject} />
        {!projectSelected ? (
          <NoProjectPage />
        ) : (
          <ProjectPage project={projectSelected} />
        )}
      </main>
      {/* <div className="flex "></div> */}
      {/* <CreateProjectForm/> */}
    </>
  );
}

export default App;
