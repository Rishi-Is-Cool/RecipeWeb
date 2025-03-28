import SignUp from "./pages/SignUp";
import Home from "./pages/Home"; 
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignUp />} />
    </Routes>
  );
}

export default App;
