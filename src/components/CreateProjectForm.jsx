import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const CreateProjectForm = ({
  onSave,
  handleDeselectProject,
  ...props
}) => {
  const modalRef = useRef();
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDate = useRef();

  const checkString = (myStr) => {
    return myStr === null || myStr.trim() === "";
  };

  const handleSave = () => {
    const enteredTitle = projectTitle.current.value;
    const enteredDesc = projectDescription.current.value;
    const enteredDate = projectDate.current.value;

    if (
      checkString(enteredTitle) ||
      checkString(enteredDesc) ||
      checkString(enteredDate)
    ) {
      console.log("Error creating project!");
      modalRef.current.open();
      return;
    }

    onSave({
      tasks: [],
      due_date: enteredDate,
      id: getRandomInt(0, 10000),
      description: enteredDesc,
      title: enteredTitle,
    });
  };

  return (
    <>
      <Modal buttonLabel="Ok..." ref={modalRef}>
        <h2 className="text-3xl font-bold text-stone-600 mb-2">Error creando el proye!</h2>
        <p className="text-stone-600 whitespace-pre-wrap">Me lo mandaste vacio, papaeldo. Ponele algo, dale</p>
      </Modal>
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
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={projectTitle} type="text" />
          <Input label="Description" textarea ref={projectDescription} />
          <Input label="Due Date" ref={projectDate} type="date" />
        </div>
      </div>
    </>
  );
};
