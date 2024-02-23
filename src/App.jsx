import { NoProjectPage } from "./components/NoProjectPage";
import { ProjectPage } from "./components/ProjectPage";
import { Sidebar } from "./components/Sidebar";

function App() {

  let isProjectListEmpty = true;

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="flex items-center justify-between">
      <Sidebar/>
      {isProjectListEmpty ? <NoProjectPage/> : <ProjectPage/>}
      </div>
      
    </>
  );
}

export default App;
