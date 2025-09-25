import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Chat from "./pages/Chat.tsx";
import Overview from "./pages/Overview.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
