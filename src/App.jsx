import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import Home from "./HomePage/Home";
import { getCurrentUser } from "./Constant/helperFunction";
import Auth from "./Auth/Auth";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
