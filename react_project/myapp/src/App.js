// Router root. Routes: "/" → Landing, "/login" → Login, "/chat" → Chat, "/dashboard" → Dashboard.
import LandingPage from "./pages/LandingPage";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Dashboard from "./pages/dashboard";
import NatiqDash from './pages/NatiqDash';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manager" element={<NatiqDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
