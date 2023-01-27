import {Routes, Route} from "react-router-dom";
import './App.css';
import {ThemeProvider, createTheme, Theme} from "@mui/material/styles"

import Layout from "./Layouts/Layout";

const bugNetTheme : Theme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {
  return (
    <ThemeProvider theme={bugNetTheme}>
    <Routes>
      <Route path="/" element={<Layout/>} />
    </Routes>
    </ThemeProvider>
  )
}

export default App
