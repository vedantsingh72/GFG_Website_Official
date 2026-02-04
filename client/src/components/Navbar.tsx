import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const { user } = useAuth();

  return (

    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-[64px] bg-black/60 backdrop-blur-md border border-green-500/20 rounded-2xl z-50 shadow-2xl shadow-green-900/10">
      <div className="h-full w-full px-6 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:shadow-green-500/60 transition-all">
            <img
              src={logo}
              alt="GFG RGIPT Logo"
              className="w-full h-full rounded-full"
            />
          </div>
          <span className="text-white text-md font-bold tracking-tight group-hover:text-green-400 transition-colors">
            GFG RGIPT
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["ABOUT", "EVENTS", "TEAM", "JOIN", "RESOURCES", "CONTACT"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-400 hover:text-green-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-green-500 hover:after:w-full after:transition-all"
              >
                {item}
              </Link>
            ),
          )}
        </nav>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-xs text-green-400 font-semibold">
              {user.name}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded-xl font-bold text-xs transition-all shadow-lg shadow-green-900/20"
            >
              Join Us
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
