import Auth from "./components/auth/Auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Copyright from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const storedToken = localStorage.getItem("authToken");
  const [token] = useState(storedToken);
  const navigate = useNavigate();

  useEffect(() => {}, [token, navigate]);

  return (
    <div className="app relative">
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Copyright/>
    </div>
  );
};

export default App;
