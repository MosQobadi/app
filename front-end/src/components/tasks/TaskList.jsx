import { useContext, useState } from "react";
import Task from "./Task";
import TasksContext from "../../context/TasksContext";
import { Box, Typography } from "@mui/material";

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
    <Box>
      <Typography variant="h6" className="text-blue-600">
        Tasks
      </Typography>
      {tasks.map((task) => (
        // <div className="my-4 flex 	h-20 bg-blue-100 border-b-2 border-blue-700	">
        <Task
          key={task._id}
          taskId={task._id}
          taskTitle={task.title}
          taskBody={task.body}
          removeTask={() => removeTask(task._id)}
          startEditTask={() => startEditTask(task._id)}
          submitEditTask={submitEditTask}
          isEditing={editingTaskId === task._id}
        />
        // </div>
      ))}
    </Box>
  );
};

export default TaskList;
