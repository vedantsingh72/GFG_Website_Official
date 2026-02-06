import { useNavigate } from "react-router-dom";
import { Event, EventField, FieldType } from "../types/event.types";
import { updateEvent } from "../services/event.service";
import {
  Users,
  Edit,
  ToggleLeft,
  ToggleRight,
  ArrowRight,
  Eye,
  Save,
  X,
  Plus,
  Trash2,
  Calendar as CalendarIcon,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useState } from "react";

const AdminEventDashboard = ({
  event,
  refreshEvent,
}: {
  event: Event;
  refreshEvent: () => void;
}) => {
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  // Form States
  const [editForm, setEditForm] = useState({
    title: event.title,
    description: event.description,
    deadline: event.deadline
      ? new Date(event.deadline).toISOString().slice(0, 16)
      : "",
    isActive: event.isActive,
    fields: [...event.fields],
  });

  const handleUpdate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsUpdating(true);

    try {
      const formData = new FormData();
      formData.append("title", editForm.title);
      formData.append("description", editForm.description);
      formData.append("isActive", String(editForm.isActive));
      formData.append("fields", JSON.stringify(editForm.fields));

      if (editForm.deadline) {
        formData.append("deadline", new Date(editForm.deadline).toISOString());
      }

      await updateEvent(event._id, formData);
      toast.success("Event updated successfully");
      setShowEditor(false);
      refreshEvent();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  const addField = () => {
    const newField: EventField = {
      label: "",
      name: `field_${Date.now()}`,
      type: "text",
      required: false,
      options: [],
    };
    setEditForm({ ...editForm, fields: [...editForm.fields, newField] });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-8">
        <div>
          <span
            className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block ${event.isActive ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"}`}
          >
            {event.isActive ? "Live" : "Draft Mode"}
          </span>
          <h1 className="text-4xl font-black text-white">{event.title}</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/events`)}
            className="text-gray-500 hover:text-white text-sm font-bold transition-colors"
          >
            Return to List
          </button>
        </div>
      </div>

      {!showEditor ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AdminCard
            title="Participants"
            desc="View registration data."
            icon={<Users className="text-blue-500" />}
            onClick={() => navigate(`/events/responses/${event._id}`)}
          />
          <AdminCard
            title="Edit Form"
            desc="Change fields & details."
            icon={<Edit className="text-purple-500" />}
            onClick={() => setShowEditor(true)}
          />
          <div
            onClick={() => {
              setEditForm({ ...editForm, isActive: !event.isActive });
              handleUpdate();
            }}
            className="bg-[#0e0e0e] border border-white/10 p-6 rounded-3xl hover:border-green-500/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/5 rounded-2xl">
                {event.isActive ? (
                  <ToggleRight className="text-green-500" size={24} />
                ) : (
                  <ToggleLeft className="text-gray-500" size={24} />
                )}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-green-500">
              {event.isActive ? "Deactivate" : "Publish"}
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Switch between Public and Draft.
            </p>
          </div>
        </div>
      ) : (
        /* FULL INLINE EDITOR */
        <form
          onSubmit={handleUpdate}
          className="bg-[#0e0e0e] border border-green-500/30 p-8 rounded-3xl space-y-8 animate-in zoom-in-95 duration-300"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Edit size={20} className="text-green-500" /> Edit Event
              Configuration
            </h2>
            <button
              type="button"
              onClick={() => setShowEditor(false)}
              className="text-gray-500 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                className="w-full bg-black border border-white/10 rounded-xl p-3 text-white focus:border-green-500 outline-none"
                value={editForm.title}
                onChange={(e) =>
                  setEditForm({ ...editForm, title: e.target.value })
                }
                placeholder="Event Title"
              />
              <textarea
                className="w-full bg-black border border-white/10 rounded-xl p-3 text-white focus:border-green-500 outline-none h-32"
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({ ...editForm, description: e.target.value })
                }
                placeholder="Event Description"
              />
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Deadline
                </label>
                <div className="relative group">
                  <input
                    type="datetime-local"
                    style={{ colorScheme: "dark" }}
                    className="w-full bg-black border border-white/10 rounded-xl p-3 text-white 
                 focus:border-green-500 outline-none
                 /* These lines make the calendar icon visible in dark mode */
                 [&::-webkit-calendar-picker-indicator]:invert 
                 [&::-webkit-calendar-picker-indicator]:opacity-70 
                 cursor-pointer"
                    value={
                      editForm.deadline ? editForm.deadline.slice(0, 16) : ""
                    }
                    onChange={(e) =>
                      setEditForm({ ...editForm, deadline: e.target.value })
                    }
                  />
                  <CalendarIcon
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-green-500 transition-colors"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Registration Fields
                </p>
                <button
                  type="button"
                  onClick={addField}
                  className="text-green-500 text-xs flex items-center gap-1 hover:underline"
                >
                  <Plus size={14} /> Add Field
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                {editForm.fields.map((f, i) => (
                  <div
                    key={i}
                    className="flex gap-2 items-center bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <input
                      className="flex-1 bg-transparent text-sm text-white outline-none"
                      value={f.label}
                      onChange={(e) => {
                        const newFields = [...editForm.fields];
                        newFields[i].label = e.target.value;
                        setEditForm({ ...editForm, fields: newFields });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setEditForm({
                          ...editForm,
                          fields: editForm.fields.filter((_, idx) => idx !== i),
                        })
                      }
                      className="text-red-500/50 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="submit"
              disabled={isUpdating}
              className="flex-1 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-2xl flex items-center justify-center gap-2"
            >
              {isUpdating ? (
                <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Save size={18} /> Save All Changes
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Preview Section */}
      <div className="bg-[#0e0e0e] border border-white/10 rounded-3xl p-8">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Eye size={14} /> Quick Preview
        </h3>
        <div className="opacity-50 pointer-events-none scale-95 origin-top">
          <img
            src={event.image.url}
            className="w-full h-48 object-cover rounded-2xl mb-4"
          />
          <p className="text-gray-400 text-sm italic line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const AdminCard = ({ title, desc, icon, onClick }: any) => (
  <div
    onClick={onClick}
    className="bg-[#0e0e0e] border border-white/10 p-6 rounded-3xl hover:border-white/30 transition-all cursor-pointer group"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-white/5 rounded-2xl">{icon}</div>
      <ArrowRight
        className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all"
        size={18}
      />
    </div>
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <p className="text-gray-500 text-xs mt-1">{desc}</p>
  </div>
);

export default AdminEventDashboard;
