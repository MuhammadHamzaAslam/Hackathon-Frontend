import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./HomePage/Home";
import { getCurrentUser } from "./Constant/helperFunction";
import Auth from "./Auth/Auth";
import Admin from "./Admin/Admin";

function App() {
  const currentUser = getCurrentUser();
  console.log("currentUser =>", currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route
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
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
