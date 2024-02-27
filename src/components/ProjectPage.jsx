import React from "react";

import { TaskDetails } from "./TaskDetails";

export const ProjectPage = ({
  project,
  handleDeleteProject,
  onAddTask,
  onDeleteTask,
  ...props
}) => {
  //   string, string[], stirng, number, string
  const { title, tasks, due_date, id, description } = project;

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={handleDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{due_date}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <TaskDetails
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    </div>
  );
};
