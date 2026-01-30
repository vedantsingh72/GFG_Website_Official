import { Calendar, Users, ArrowRight } from 'lucide-react';

export default function PastEvents() {
  const pastEvents = [
    {
      title: 'Web Development Workshop',
      date: 'October 15, 2024',
      attendees: 120,
      description: 'A comprehensive workshop on modern web development with React and Next.js',
      image: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      title: 'Data Science Bootcamp',
      date: 'September 28, 2024',
      attendees: 95,
      description: 'Hands-on introduction to Python, pandas, and machine learning basics',
      image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      title: 'Open Source Contribution Guide',
      date: 'September 10, 2024',
      attendees: 150,
      description: 'Learn how to contribute to open-source projects and build your GitHub portfolio',
      image: 'bg-gradient-to-br from-orange-600 to-orange-800',
    },
    {
      title: 'Interview Preparation Series',
      date: 'August 25, 2024',
      attendees: 200,
      description: 'Tips and tricks for cracking technical interviews at top companies',
      image: 'bg-gradient-to-br from-pink-600 to-pink-800',
    },
    {
      title: 'Cloud Computing Basics',
      date: 'August 5, 2024',
      attendees: 110,
      description: 'Introduction to AWS and cloud architecture fundamentals',
      image: 'bg-gradient-to-br from-cyan-600 to-cyan-800',
    },
    {
      title: 'DevOps Workshop',
      date: 'July 20, 2024',
      attendees: 85,
      description: 'Docker, Kubernetes, and CI/CD pipeline implementation',
      image: 'bg-gradient-to-br from-red-600 to-red-800',
    },
  ];

  return (
  
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Past <span className="text-green-500">Events</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore the events we have successfully conducted and the learning experiences shared with our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-slate-950 rounded-lg overflow-hidden border border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Event Image */}
              <div className={`h-32 ${event.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              </div>

              {/* Event Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white line-clamp-2">{event.title}</h3>

                <p className="text-sm text-slate-400 line-clamp-2">{event.description}</p>

                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-green-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-green-500" />
                    {event.attendees} attended
                  </div>
                </div>

                <button className="w-full mt-2 px-4 py-2 bg-green-500/10 border border-green-500/50 text-green-400 rounded font-medium hover:bg-green-500/20 transition-colors flex items-center justify-center gap-2 group/btn">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}
