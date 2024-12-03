import React from "react";
import { Routes, Route,} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;