import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Routing from "./Routing/Routing"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from "react";

Header

function App() {

  const[isDarkMode,setIsDarkMode] = useState(false);

  const toggleBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  }

  let backgroundClass = isDarkMode ? "bg-dark text-light" : "bg-light text-dark";
  return (
    <div className= {backgroundClass}>
      <Header isDarkMode = {isDarkMode} toggleBackgroundColor = {toggleBackgroundColor} />
      <Routing />
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App
