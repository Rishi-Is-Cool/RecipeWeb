import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/login";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 
import MaharashtrianPage from "./pages/MaharashtrianPage"; 
import GoanPage from "./pages/GoanPage"; 
import BengaliPage from "./pages/BengaliPage"; 
import NorthIndianPage from "./pages/NorthIndianPage";
import SouthIndianPage from "./pages/SouthIndianPage";
import NorthEasternIndianPage from "./pages/NorthEasternIndianPage";
import RecipePage from "./pages/RecipePage"; 
import SearchResults from "./pages/SearchResults"; 

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
      <Route path="/recipe/:recipeName" element={<RecipePage />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
