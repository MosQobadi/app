// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskManager from "./components/tasks/TaskManager";
import { TasksProvider } from "./context/TasksContext";

function App() {
  return (
    <TasksProvider>
      <Router>
        <div>
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/task-manager" element={<TaskManager />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TasksProvider>
  );
}

export default App;
