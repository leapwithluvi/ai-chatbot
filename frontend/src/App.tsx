import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat.tsx";
import Overview from "./pages/Overview.tsx";
import Credits from "./pages/Credits.tsx";
import Images from "./pages/Images.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/images" element={<Images />} />
    </Routes>
  );
};

export default App;
