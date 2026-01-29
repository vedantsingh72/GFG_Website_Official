import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#007bff",
    color: "white",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const logoStyle: React.CSSProperties = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
  };

  const linkHoverStyle: React.CSSProperties = {
    textDecoration: "underline",
  };

  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>GFG</div>
      <nav style={navStyle}>
        <Link
          to="/about"
          style={{ ...linkStyle, ...(hoveredLink === "about" ? linkHoverStyle : {}) }}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          About
        </Link>
        <Link
          to="/contact"
          style={{ ...linkStyle, ...(hoveredLink === "contact" ? linkHoverStyle : {}) }}
          onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Dashboard;
