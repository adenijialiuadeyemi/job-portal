import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import ApplyJob from "./pages/ApplyJob";
import Footer from "./components/Footer";
import { AppContext } from "./context/AppContext";
import RecruiterLogin from "./components/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";
const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications/" element={<Applications />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard/*"
            element={
              <Routes>
                <Route path="add-job" element={<AddJob />} />
                <Route path="manage-jobs" element={<ManageJobs />} />
                <Route
                  path="view-applications"
                  element={<ViewApplications />}
                />
              </Routes>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
