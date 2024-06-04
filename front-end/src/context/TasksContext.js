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

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask: postTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
