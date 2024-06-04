import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import TasksContext from "../../context/TasksContext";

function AddTaskForm() {
  const { register, handleSubmit, reset } = useForm();
  const { addTask } = useContext(TasksContext);

  const createTask = (newTask) => {
    addTask(newTask);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(createTask)}>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          {...register("title", { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          id="body"
          {...register("body", { required: true })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="mt-3 px-2 py-1 bg-blue-500 text-white rounded-md"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
