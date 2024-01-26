import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/navbar";
import SecondPage from "./pages/SecondPage";
import NotFoundPage from "./pages/404";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/message");
      setMessage(result.data.message);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <header className="App-header">
                <p>{message}</p>
              </header>
            </div>
          }
        />
        <Route path="/second" Component={SecondPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;
