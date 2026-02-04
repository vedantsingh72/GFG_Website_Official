import EventCard from "../components/eventcard";

const UpcomingEvent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-6 py-16">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-6xl text-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-white md:text-4xl">
          Upcoming Events
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Don’t miss out on our flagship competitions, workshops & hackathons 🚀
        </p>
      </div>

      {/* Events Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <EventCard
          title="Code Quest 3.0"
          date="15 Feb 2026 • 6:00 PM"
          description="A high-intensity competitive coding contest with exciting prizes and a direct pass to IIT Bombay Techfest."
          imageUrl="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg"
          tag="Flagship"
        />

        <EventCard
          title="DataViz 2.0"
          date="22 Feb 2026 • 5:30 PM"
          description="Visualize real-world datasets and compete to build the most insightful and aesthetic dashboards."
          imageUrl="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/landscape.jpg"
          tag="Workshop"
        />

        <EventCard
          title="CS SkillUp: Web Dev Bootcamp"
          date="1 Mar 2026 • 7:00 PM"
          description="Hands-on bootcamp covering React, APIs, and deployment. Perfect for beginners and intermediates."
          imageUrl="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/nature.jpg"
          tag="Bootcamp"
        />
      </div>
    </div>
  );
};

export default UpcomingEvent;
