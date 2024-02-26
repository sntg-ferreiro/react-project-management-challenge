import React from "react";
import img from "../assets/no-projects.png";

export const NoProjectPage = () => {
  return (
    <div className="w-[35rem] mt-16 items-center">
      <img
        src={img}
        alt="chapita pa escribir"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h1 className="text-3xl font-bold text-stone-600 mb-2">
        No Project Selected
      </h1>
      <p className="text-stone-600 whitespace-pre-wrap">
        Select a project or get started with a new one
      </p>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Create a new Project
      </button>
    </div>
  );
};
