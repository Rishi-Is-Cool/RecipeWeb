import { useState } from 'react'
import './App.css'
import Header from "./components/header";
import CuisineCards from "./components/CuisineCards";
import Footer from "./components/footer"; 


function App() {
  return (
    <div>
      <Header/>
      <CuisineCards/>
      <Footer />
    </div>
  )
}

export default App
