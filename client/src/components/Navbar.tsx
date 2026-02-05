import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { ChevronDown, LogOut, UserPlus, ShieldCheck } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-[64px] bg-black/60 backdrop-blur-md border border-green-500/20 rounded-2xl z-50 shadow-2xl shadow-green-900/10">
      <div className="h-full w-full px-6 flex items-center justify-between">

        <Link to="/home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:shadow-green-500/60 transition-all overflow-hidden">
            <img
              src={logo}
              alt="GFG RGIPT"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white text-md font-bold tracking-tight group-hover:text-green-400 transition-colors">
            GFG RGIPT
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["JOIN", "EVENTS", "TEAM", "RESOURCES", "CONTACT"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-green-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-green-500 hover:after:w-full after:transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Auth Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <div
              className="relative py-2" 
              onMouseEnter={() => setShowUserDropdown(true)}
              onMouseLeave={() => setShowUserDropdown(false)}
            >
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-xs text-green-400 font-semibold hover:bg-green-500/20 transition-all">
                {user.name}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${showUserDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showUserDropdown && (
                <div className="absolute top-[85%] right-0 w-40 pt-2 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-gray-400 hover:text-white text-xs font-bold px-4 transition-colors"
              >
                Login
              </Link>

              <div
                className="relative py-2" 
              >
                <Link to="/signup">
                  <button className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
