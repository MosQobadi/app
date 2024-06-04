// src/pages/TaskManager.js
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const TaskManager = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Task Manager</h1>
      <br />
      <hr />
      <br />
      <AddTaskForm></AddTaskForm>
      <br />
      <hr />
      <br />
      <TaskList></TaskList>
    </div>
  );
};

export default TaskManager;
