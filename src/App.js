import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Quiz from "./Components/Quiz.jsx";
import FirstPage from "./Components/FirstPage.jsx";
import Signin from "./Components/siginfolder/Signin.jsx";
import Login from "./Components/loginfolder/Login.jsx";
import PreLoader from "./Components/PreLoader.js";
import AfterLogin from "./Components/afterLogin/AfterLogin.jsx";
import AfterLoginCombined from "./Components/afterLogin/AfterLoginCombined.jsx";
import QuizDetailsPage from "./Components/forms/QuizDetailsPage.jsx";
import QuizForm from "./Components/forms/QuizForm.jsx";
import ContestList from "./Components/forms/ContestList.jsx";
import ContestDetails from "./Components/forms/ContestDetails.jsx";
import QuestionDetails from "./Components/forms/QuestionDetails.jsx";
import CreateContestForm from "./Components/forms/CreateContest.jsx";
import Result from "./Components/Result page/Result.jsx";
import RedirectOnRefresh from "./Components/RedirectOnRefresh.jsx";
import Faq from "./Components/FaqPage/Faq.jsx";
import AllAbout from "./Components/AboutPage/AllAbout.jsx";
import Comipler from "./Components/forms/Compiler.jsx";

function App() {
  return (
    <>
      {/* <PreLoader />  */}
      <Router>
        <Header />
        <RedirectOnRefresh />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/AfterLog" element={<AfterLoginCombined />} />
          <Route path="/quiz/:id" element={<QuizDetailsPage />} />
          <Route path="/createquiz" element={<QuizForm />} />
          <Route path="/createcontest" element={<CreateContestForm />} />
          <Route path="/contest" element={<ContestList />} />
          <Route path="/contest/:contestId" element={<ContestDetails />} />
          <Route
            path="/contest/:contestId/question/:questionId"
            element={<QuestionDetails />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<AllAbout />} />
          <Route path="/contest/run" element={<Comipler />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
