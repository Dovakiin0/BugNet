import { Routes, Route } from "react-router-dom";

import Layout from "./partials/Layouts";
import Home from "./app/Home";
import Project from "./app/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Route>
    </Routes>
  );
}

export default App;
