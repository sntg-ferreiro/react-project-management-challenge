import React from "react";
import { useState } from "react";
import { SidebarElement } from "./SidebarElement";

const base_list = [
  {
    id: 0,
    tasks: ["hacer cosa", "hacer cosa 2"],
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

export const Sidebar = ({handleSelectProject, ...props}) => {
  const [projectsList, setProjectsList] = useState(base_list);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add a Project
        </button>
      </div>
      <ul className="mt-4">
        {projectsList.map((p) => (
          <SidebarElement handleSelectProject={() => handleSelectProject(p)} key={projectsList.indexOf(p)}>
            {p.title}
          </SidebarElement>
        ))}
      </ul>
    </aside>
  );
};
