import { useContext } from "react";
import Task from "./Task";
import TasksContext from "../../context/TasksContext";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TasksContext);

  const removeTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      <h1 className="font-bold text-blue-500">Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task._id}
            taskId={task._id}
            taskTitle={task.title}
            taskBody={task.body}
            removeTask={() => removeTask(task._id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
