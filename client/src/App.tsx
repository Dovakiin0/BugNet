import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Layout = React.lazy(() => import("./partials/Layouts"));

const Home = React.lazy(() => import("./app/Home"));
const Project = React.lazy(() => import("./app/Project"));
const Bugs = React.lazy(() => import("./app/Bugs"));
const Kanban = React.lazy(() => import("./app/Kanban"));
const Login = React.lazy(() => import("./app/Login"));
const Register = React.lazy(() => import("./app/Register"));

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/bugs/:id" element={<Bugs />} />
        <Route path="/kanban" element={<Kanban />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
