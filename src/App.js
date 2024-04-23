import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Quiz from "./Components/Quiz.jsx";
import FirstPage from "./Components/FirstPage.jsx";
import Signin from "./Components/siginfolder/Signin.jsx"
import Login from "./Components/loginfolder/Login.jsx"
import PreLoader from "./Components/PreLoader.js"
import AfterLogin from "./Components/afterLogin/AfterLogin.jsx";
import AfterLoginCombined from "./Components/afterLogin/AfterLoginCombined.jsx";

function App() {
  
  return (
    
    <>
    {/* <PreLoader />  */}
    <Router>
        <Header />
          
        <Routes>
        <Route path="/" element = {<FirstPage />}/>
        <Route path="/quiz" element= {<Quiz />} />
        <Route path="/signin" element= {<Signin />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/AfterLog" element= {<AfterLoginCombined />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;

