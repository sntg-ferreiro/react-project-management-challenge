import React from "react";
import { NewTask } from "./NewTask";

export const TaskDetails = ({ tasks, onAddTask, onDeleteTask, ...props }) => {
  let taskListDisplay = (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {tasks.map((t) => (
        <li className="gap-4 flex justify-between my-4" key={tasks.indexOf(t)}>
          <p>{t}</p>
          <button onClick={() => onDeleteTask(tasks.indexOf(t))}>clear</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1 className="text-stone-950 font-bold text-2xl">Tasks</h1>
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 ? (
        taskListDisplay
      ) : (
        <p className="text-stone-800 my-4">Agregate una tareita, pa!</p>
      )}
    </div>
  );
};
