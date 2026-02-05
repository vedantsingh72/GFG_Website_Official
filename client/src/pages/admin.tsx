import { useEffect, useState } from "react";
import EventCreatorForm from "../components/eventcreaterform";
import {
  getAllEvents,
  deleteEvent,
  getEventResponses,
} from "../services/event.service";
import { useAuth } from "../auth/authContext";

interface Event {
  _id: string;
  title: string;
  description: string;
  image: { url: string };
  isActive: boolean;
  deadline?: string;
  createdAt: string;
}

const Admin = () => {
  const { token } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedResponses, setSelectedResponses] = useState<any[] | null>(
    null,
  );

  const fetchEvents = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await getAllEvents(token);
      setEvents(res.events || []);
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [token]);

  const handleDelete = async (id: string) => {
    if (!token) return;
    const ok = confirm("Delete this event?");
    if (!ok) return;

    await deleteEvent(id, token);
    fetchEvents();
  };

  const handleViewResponses = async (id: string) => {
    if (!token) return;
    const res = await getEventResponses(id, token);
    setSelectedResponses(res.responses || []);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setShowCreate((v) => !v)}
          className="px-5 py-2.5 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
        >
          {showCreate ? "Close Creator" : "+ Create Event"}
        </button>
      </div>

      {/* Event Creator */}
      {showCreate && (
        <div className="max-w-4xl mx-auto mb-16">
          <EventCreatorForm token={token!} />
        </div>
      )}

      {/* Events List */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">All Events</h2>

        {loading ? (
          <p className="text-gray-400">Loading events...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-green-500/30 transition"
              >
                <img
                  src={event.image.url}
                  alt={event.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                    <span>
                      {event.deadline
                        ? `Deadline: ${new Date(event.deadline).toLocaleString()}`
                        : "No deadline"}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        event.isActive
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {event.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleViewResponses(event._id)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition text-sm"
                    >
                      View Responses
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Responses Modal */}
      {selectedResponses && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-black border border-white/10 rounded-2xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Event Responses</h3>
              <button
                onClick={() => setSelectedResponses(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <pre className="max-h-[60vh] overflow-auto text-sm text-gray-300 bg-black/50 p-4 rounded-lg">
              {JSON.stringify(selectedResponses, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
