import { Routes, Route } from "react-router-dom";

import Layout from "./partials/Layouts";
import Home from "./app/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
