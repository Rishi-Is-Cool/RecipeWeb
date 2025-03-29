import SignUp from "./pages/login";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
