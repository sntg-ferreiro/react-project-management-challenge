import React from "react";

export const SidebarElement = ({
  idSelected,
  id,
  children,
  handleSelectProject,
  ...props
}) => {
  let clazzName = `w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 ${
    id === idSelected ? "bg-stone-800 text-stone-200" : "text-stone-400"
  }`;

  return (
    <li className="flex justify-between my-4">
      <button onClick={() => handleSelectProject(id)} className={clazzName}>
        {children}
      </button>
    </li>
  );
};
