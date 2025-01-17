import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";

import "./App.css";
import Disclaimer from "./pages/Disclaimer";
import Cookie from "./pages/Cookie";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/term" element={<Term />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/cookie" element={<Cookie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
