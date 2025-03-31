import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/login";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 
import CuisinePage from "./pages/CuisinePage";

function App() {
  return (
    <Routes>
      <Route path="/:cuisine" element={<CuisinePage />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
