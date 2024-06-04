import { useContext, useState } from "react";
import Task from "./Task";
import TasksContext from "../../context/TasksContext";

const TaskList = () => {
  const { tasks, deleteTask, editTask } = useContext(TasksContext);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const removeTask = (taskId) => {
    deleteTask(taskId);
  };

  const startEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const submitEditTask = (taskId, updatedTask) => {
    editTask(taskId, updatedTask);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h1 className="font-bold text-blue-500">Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <div
            key={task._id}
            className="my-4 flex 	h-20 bg-blue-100 border-b-2 border-blue-700	"
          >
            <Task
              taskId={task._id}
              taskTitle={task.title}
              taskBody={task.body}
              removeTask={() => removeTask(task._id)}
              startEditTask={() => startEditTask(task._id)}
              submitEditTask={submitEditTask}
              isEditing={editingTaskId === task._id}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
