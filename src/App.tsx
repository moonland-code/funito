import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Joke from "./pages/Joke";
import AboutPage from "@/pages/about";
import Topics from "./pages/topics";
import Puzzel from "./pages/Puzzle";
import Entertainment from "./pages/Entertainment";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Register />} path="/Register" />
      <Route element={<Login />} path="/Login" />
      <Route element={<Dashboard />} path="/Dashboard" />
      <Route element={<Puzzel />} path="/Puzzel" />
      <Route element={<Joke />} path="/joke" />
      <Route element={<Entertainment />} path="/Entertainment" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Topics />} path="/topics" />
    </Routes>
  );
}

export default App;
