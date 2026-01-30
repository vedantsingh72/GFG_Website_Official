'use client';

import { Calendar, Clock, MapPin, Bell } from 'lucide-react';

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      title: 'Artificial Intelligence Workshop',
      date: 'February 15, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'RGIT Campus - Tech Lab',
      description: 'Explore AI concepts, neural networks, and practical applications with hands-on coding.',
      spots: 40,
    },
    {
      title: 'Full Stack Development Bootcamp',
      date: 'February 22, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'RGIT Campus - Main Hall',
      description: 'Build complete web applications from frontend to backend with real-world projects.',
      spots: 60,
    },
    {
      title: 'Hackathon 2025',
      date: 'March 5-7, 2025',
      time: '9:00 AM - 9:00 AM (48 hours)',
      location: 'RGIT Campus - Convention Center',
      description: 'Showcase your skills and compete with fellow developers in our annual 48-hour hackathon.',
      spots: 200,
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming <span className="text-green-500">Events</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join us for exciting learning opportunities and networking events coming soon.
          </p>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Event Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-300">{event.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Calendar className="w-5 h-5 text-green-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-5 h-5 text-green-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-5 h-5 text-green-500" />
                      {event.location}
                    </div>
                  </div>
                </div>

                {/* Signup Section */}
                <div className="md:flex md:flex-col md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="text-sm text-slate-400">Available Spots</div>
                    <div className="text-3xl font-bold text-green-500">{event.spots}</div>
                  </div>
                  <button className="w-full px-6 py-3 bg-green-500 text-slate-950 font-semibold rounded-lg hover:bg-green-400 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Bell className="w-5 h-5" />
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-slate-900 rounded-lg border border-slate-800 text-center">
          <p className="text-slate-300 mb-4">
            Want to host an event or have a topic suggestion? We'd love to hear from you!
          </p>
          <button className="px-8 py-2 bg-green-500/10 border border-green-500/50 text-green-400 rounded font-medium hover:bg-green-500/20 transition-colors">
            Suggest an Event
          </button>
        </div>
      </div>
    </section>
  );
}
