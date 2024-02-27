import React from "react";

export const SidebarElement = ({ id, children, handleSelectProject, ...props }) => {
  return (
    <li className="flex justify-between my-4">
      <button onClick={() => handleSelectProject(id)}
      className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
        {children}
      </button>
    </li>
  );
};
