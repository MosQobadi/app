// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskManager from "./components/tasks/TaskManager";
import { TasksProvider } from "./context/TasksContext";
import SignUpForm from "./components/users/SignUpForm";
import { UsersProvider } from "./context/UsersContext";

function App() {
  return (
    <TasksProvider>
      <UsersProvider>
        <Router>
          <div>
            <Navbar />
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Navigate to="/sign-up" />} />
                <Route path="/sign-up" element={<SignUpForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/task-manager" element={<TaskManager />} />
              </Routes>
            </div>
          </div>
        </Router>
      </UsersProvider>
    </TasksProvider>
  );
}

export default App;
