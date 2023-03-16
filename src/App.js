import "./App.css";
import ReactDOM from "react-dom/client";

import Dashboard1 from "./component/Dashboard1";
import { Routes, Route } from "react-router-dom";
import Registration from "./component/Registration";
import Home from "./component/Home";
import Login from "./component/Login";

import Footer from "./component/Footer";
import { useEffect } from "react";
import App2 from "./App2";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App2 />);
    }
  });
  return (
    <div className="App">
      <Dashboard1 />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
