import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import { UserContext } from "../UserContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext); 

  return (
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
