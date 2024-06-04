import { createContext, useEffect, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:3000/todos");
    setTasks(res.data.todos);
  };

  const postTask = async (newTask) => {
    const res = await axios.post("http://localhost:3000/todos", newTask);
    const savedTask = res.data.todo;
    setTasks((prevTasks) => [...prevTasks, savedTask]);
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`http://localhost:3000/todos/${taskId}`);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  };

  const editTask = async (taskId, updatedTask) => {
    const res = await axios.put(
      `http://localhost:3000/todos/${taskId}`,
      updatedTask
    );
    const updatedTaskData = res.data.todo;
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === taskId ? updatedTaskData : task))
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask: postTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
