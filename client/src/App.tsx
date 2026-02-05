import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import AuthBack from "./auth/authBack";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/teams";
import Events from "./pages/events";
import Resources from "./pages/resources";
import JoinGFG from "./pages/joinGFG";
import AdminLogin from "./pages/adminlogin";
import AdminSignup from "./pages/adminsignup";
import AdminPage from "./pages/adminhain";
import Navbar from "./components/Navbar";
import Realadmin from "./pages/admin";
import ContactUs from "./pages/contact.";
import ApplicationPage from "./pages/ApplicationPage";

const App = () => {
  return (
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/join" element={<ApplicationPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/realadmin" element={<Realadmin />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
