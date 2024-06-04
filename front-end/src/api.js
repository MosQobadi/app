import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const addTask = (taskData) =>
  api.post("http://localhost:3000/todos", taskData);

export default api;
