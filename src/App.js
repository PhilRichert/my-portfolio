import "./App.css";
import "./components/navbar";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/navbar";

import Sidenav from "./components/sidebar";

import Home from "./components/home";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidenav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
