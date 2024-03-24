import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Scroll from "./Components/Scroll.jsx";
import PreLoader from "./Components/PreLoader.js";
import SecondPage from "./Components/SecondPage.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
    <PreLoader /> 
    <Router>
      <div className="App">
        <Header/>
        <Home />
        <Scroll />
        <SecondPage />
        <Footer />
        </div>
    </Router>
    </>
  );
}

export default App;
