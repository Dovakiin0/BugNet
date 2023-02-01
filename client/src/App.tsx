import React from "react";
import { Routes, Route } from "react-router-dom";

const Layout = React.lazy(() => import("./partials/Layouts"));

const Home = React.lazy(() => import("./app/Home"));
const Project = React.lazy(() => import("./app/Project"));
const CreateBugs = React.lazy(() => import("./app/Bugs/pages/CreateBug"));
const Bugs = React.lazy(() => import("./app/Bugs"));
const Kanban = React.lazy(() => import("./app/Kanban"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bugs/create" element={<CreateBugs />} />
        <Route path="/kanban" element={<Kanban />} />
      </Route>
    </Routes>
  );
}

export default App;
