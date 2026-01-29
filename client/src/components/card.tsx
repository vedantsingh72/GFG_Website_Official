import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    width: "220px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease-in-out",
    margin: "10px",
  };

  const hoverStyle: React.CSSProperties = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
  };

  const titleStyle: React.CSSProperties = {
    marginBottom: "10px",
    fontSize: "1.3rem",
  };

  const descriptionStyle: React.CSSProperties = {
    marginBottom: "15px",
    color: "#555",
    fontSize: "0.95rem",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
      <button style={buttonStyle}>Go</button>
    </div>
  );
};

export default Card;
