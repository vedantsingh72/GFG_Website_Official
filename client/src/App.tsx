import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import AuthBack from "./auth/authBack";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/teams";
import PastEvents from "./pages/pastEvents";
import UpcomingEvents from "./pages/upcomingEvent";
import Resources from "./pages/resources";
import JoinGFG from "./pages/joinGFG";
import AdminLogin from "./pages/adminlogin";
import AdminSignup from "./pages/adminsignup";
import AdminPage from "./pages/adminhain";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pastEvents" element={<PastEvents />} />
        <Route path="/upcomingEvents" element={<UpcomingEvents />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/joinGFG" element={<JoinGFG />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/adminhain" element={<AdminPage />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
