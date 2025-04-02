import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/login";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 
import MaharashtrianPage from "./pages/MaharashtrianPage"; // import Maharashtrian page
import GoanPage from "./pages/GoanPage"; // import Gujarati page
import BengaliPage from "./pages/BengaliPage"; // import Bengali page
import NorthIndianPage from "./pages/NorthIndianPage"; // import North Indian page
import SouthIndianPage from "./pages/SouthIndianPage"; // import South Indian page
import NorthEasternIndianPage from "./pages/NorthEasternIndianPage"; // import North Eastern page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maharashtrian" element={<MaharashtrianPage />} />
      <Route path="/goan" element={<GoanPage />} />
      <Route path="/bengali" element={<BengaliPage />} />
      <Route path="/north-indian" element={<NorthIndianPage />} />
      <Route path="/south-indian" element={<SouthIndianPage />} />
      <Route path="/north-eastern-indian" element={<NorthEasternIndianPage />} />
      <Route path="/login" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
