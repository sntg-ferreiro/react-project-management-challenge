import React, { useRef } from "react";
import Input  from "./Input";

export const CreateProjectForm = ({
  onSave,
  handleDeselectProject,
  ...props
}) => {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();


  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={handleDeselectProject}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={() => onSave({
              tasks: [],
              due_date: projectDate.current.value,
              id: Math.random(),
              description: projectDescription.current.value,
              title: projectTitle.current.value,
            })}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={projectTitle} type="text"/>
        <Input label="Description" textarea ref={projectDescription} />
        <Input label="Due Date" ref={projectDate} type="date"/>
      </div>
    </div>
  );
};
