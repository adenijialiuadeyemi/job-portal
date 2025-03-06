import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";
import Footer from "./components/Footer";
import { AppContext } from "./context/AppContext";
import RecruiterLogin from "./components/RecruiterLogin";

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications/" element={<Applications />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
