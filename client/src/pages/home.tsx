import React from "react";
import Card from "../components/card";
import Dashboard from "../components/dashboard";

const cardsData = [
  { title: "About", description: "Learn more about us", link: "/about" },
  { title: "Past Events", description: "See our past events", link: "/pastEvents" },
  { title: "Upcoming Events", description: "Check upcoming events", link: "/upcomingEvents" },
  { title: "Resources", description: "Access resources", link: "/resources" },
  { title: "Join GFG", description: "Become a member", link: "/joinGFG" },
  {title:"Teams", description:"Meet our teams", link:"/teams"},
];

const Home: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
    marginTop: "80px", // To give space below fixed dashboard
  };

  return (
    <div>
      <Dashboard /> {/* Navbar at the top */}
      <div style={containerStyle}>
        {cardsData.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
