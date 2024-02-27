import React from "react";
import { SidebarElement } from "./SidebarElement";

export const Sidebar = ({
  idSelected,
  projects,
  handleAddProject,
  handleSelectProject,
  ...props
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <button
          onClick={handleAddProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add a Project
        </button>
      </div>
      <ul className="mt-4">
        {projects.map((p) => (
          <SidebarElement
            idSelected={idSelected}
            handleSelectProject={handleSelectProject}
            id={p.id}
            key={p.id}
          >
            {p.title}
          </SidebarElement>
        ))}
      </ul>
    </aside>
  );
};
