import "./App.css";
import SideBar from "./components/SideBar";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
