// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { ClassProvider } from "./Teacher/context/ClassContext.jsx";
// import { Toaster } from "react-hot-toast";

// createRoot(document.getElementById("root")).render(
//   <ClassProvider>
//     <StrictMode>
//       <App />
//       <Toaster position="top-center" reverseOrder={false} />
//     </StrictMode>
//   </ClassProvider>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </StrictMode>
);

