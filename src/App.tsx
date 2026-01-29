import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import SignupForm from "./components/signupform";
import AuthBack from "./auth/authBack";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/teams";
import PastEvents from "./pages/pastEvents";
import UpcomingEvents from "./pages/upcomingEvent";
import Resources from "./pages/resources";
import JoinGFG from "./pages/joinGFG";



const App = () => {
  return (
    <BrowserRouter>
     +<Routes>
  <Route path="/" element={<Navigate to="/signup" />} />
   <Route path="/about" element={<About />} />
   <Route path="/teams" element={<Team />} />
   <Route path="/pastEvents" element={<PastEvents/>} />
   <Route path="/upcomingEvents" element={<UpcomingEvents />} />
   <Route path="/resources" element={<Resources />} />
   <Route path="/joinGFG" element={<JoinGFG />} />
  <Route path="/login" element={<LoginForm />} />
  <Route path="/signup" element={<SignupForm />} />

  <Route
    path="/home"
    element={
      <AuthBack>
        <Home/>
      </AuthBack>
    }
  />
</Routes>
    </BrowserRouter>
  );
};

export default App;
