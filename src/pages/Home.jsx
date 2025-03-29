import React from 'react'
import "../styles/Main.css"; 
import "../styles/Nav.css"; 
import "../styles/Footer.css"; 
import "../styles/Cards.css"; 
import CuisineCards from '../components/CuisineCards'
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopupMessage from "../components/PopupMessage";

const Home = () => {
  return (
    <div>
      <Header/>
      <PopupMessage />
      <CuisineCards/>
      <Footer/>
    </div>
  )
}

export default Home
