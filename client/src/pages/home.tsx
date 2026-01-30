import Card from "../components/card";
import Dashboard from "../components/dashboard";

const cardsData = [
  { title: "About", description: "Learn more about us", link: "/about" },
  { title: "Past Events", description: "See our past events", link: "/pastEvents" },
  { title: "Upcoming Events", description: "Check upcoming events", link: "/upcomingEvents" },
  { title: "Resources", description: "Access resources", link: "/resources" },
  { title: "Join GFG", description: "Become a member", link: "/joinGFG" },
  { title: "Teams", description: "Meet our teams", link: "/teams" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      
      {/* Header */}
      <Dashboard />

      {/* Main content */}
      <main className="flex-1 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
        
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald-600/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-teal-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        {/* Cards Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-3xl font-bold text-green-400 mb-10 text-center">
            GFG RGIPT Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
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
      </main>
    </div>
  );
};

export default Home;
