import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./HomePage/Home";
import { getCurrentUser } from "./Constant/helperFunction";
import Auth from "./Auth/Auth";
import Admin from "./Admin/Admin";
import UserJourney from "./User Journey/userJourney";
import ApplicationDashboard from "./Application Dashboard/Dashboard";
import AdminApplication from "./Admin/AdminApplication";
import AdminCategory from "./Admin/AdminCategory";

function App() {
  const currentUser = getCurrentUser();
  console.log("currentUser =>", currentUser);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            currentUser?.role === "admin" ? (
              <Admin />
            ) : currentUser?.role === "user" ? (
              <Home />
            ) : (
              <Auth />
            )
          }
        /> */}
        <Route path="/" element={<UserJourney />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/application" element={<AdminApplication />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/your-application" element={<ApplicationDashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
