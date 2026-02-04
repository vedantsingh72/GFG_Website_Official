import { useState } from "react";
import { createEvent } from "../services/event";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [fields, setFields] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const addField = () => {
    setFields([
      ...fields,
      { label: "", name: "", type: "text", required: false, options: [] },
    ]);
  };

  
    const handleSubmit = async () => {
  if (!deadline) {
    alert("Deadline is required");
    return;
  }

  setLoading(true);

  const isoDeadline = new Date(
    deadline + "T00:00:00.000Z"
  ).toISOString();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("deadline", isoDeadline);
  formData.append("fields", JSON.stringify(fields));
  if (image) formData.append("image", image);

  try {
    await createEvent(formData);
    alert("Event created successfully");
    setTitle("");
    setDescription("");
    setDeadline("");
    setFields([]);
    setImage(null);
  } catch (err: any) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="relative w-[520px] rounded-[28px] p-8 md:p-10">
      <div className="absolute inset-[-20px] rounded-[40px] blur-3xl bg-green-600/25 opacity-80 -z-10" />

      <div
        className="
          relative rounded-[28px] p-9 pb-10
          bg-black/65 backdrop-blur-xl
          border border-green-500/55
          shadow-[0_0_90px_rgba(34,197,94,0.55),inset_0_0_30px_rgba(34,197,94,0.2)]
        "
      >
        <div className="text-center mb-8">
          <h1 className="text-green-400 text-3xl font-extrabold">
            Create Event
          </h1>
          <p className="text-gray-400 text-sm">
            Admin Event Creation Panel
          </p>
        </div>

        <div className="space-y-5">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
            className="w-full px-6 py-4 rounded-full bg-black/75 border border-green-500/80 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.45)]"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event Description"
            rows={3}
            className="w-full px-6 py-4 rounded-2xl bg-black/75 border border-green-500/80 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.45)]"
          />

          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-black/75 border border-green-500/80 text-white focus:outline-none focus:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.45)]"
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full text-gray-300 file:bg-green-500/20 file:text-green-400 file:border-0 file:px-5 file:py-2 file:rounded-full"
          />

          <div className="border border-green-500/40 rounded-2xl p-4">
            <p className="text-green-400 font-semibold mb-3">
              Registration Fields
            </p>

            {fields.map((_, i) => (
              <div key={i} className="flex gap-2 mb-3">
                <input
                  placeholder="Label"
                  className="flex-1 px-4 py-2 rounded-full bg-black border border-green-500/60 text-white"
                  onChange={(e) => {
                    const copy = [...fields];
                    copy[i].label = e.target.value;
                    setFields(copy);
                  }}
                />
                <select
                  className="px-4 py-2 rounded-full bg-black border border-green-500/60 text-white"
                  onChange={(e) => {
                    const copy = [...fields];
                    copy[i].type = e.target.value;
                    setFields(copy);
                  }}
                >
                  <option value="text">Text</option>
                  <option value="select">Select</option>
                  <option value="checkbox">Checkbox</option>
                </select>
              </div>
            ))}

            <button
              onClick={addField}
              className="mt-2 text-sm text-green-400 hover:underline"
            >
              + Add Field
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              w-full py-4 rounded-full
              bg-gradient-to-r from-green-700 via-green-500 to-green-400
              text-white font-bold text-lg
              shadow-[0_0_50px_rgba(34,197,94,0.8)]
              hover:shadow-[0_0_80px_rgba(34,197,94,1)]
              hover:scale-105 active:scale-98
              transition-all duration-200
              disabled:opacity-60
            "
          >
            {loading ? "Creating..." : "Create Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
