import { useState } from "react";
import { createEvent } from "../services/event";

type FieldType = "text" | "select" | "textarea" | "checkbox";

interface Field {
  label: string;
  name: string; 
  type: FieldType;
  required: boolean;
  options?: string[];
}

type Errors = {
  title?: string;
  description?: string;
  image?: string;
  deadline?: string;
  fields?: string;
  fieldErrors?: Record<number, Partial<Record<keyof Field, string>>>;
};

const inputBase =
  "w-full rounded-xl bg-black/70 border border-green-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition";

const toKey = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .split(/\s+/)
    .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join("");

const uniqueKey = (base: string, existing: Set<string>) => {
  if (!existing.has(base)) return base;
  let i = 2;
  while (existing.has(`${base}${i}`)) i++;
  return `${base}${i}`;
};

const EventCreatorForm = ({ token }: { token: string }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [fields, setFields] = useState<Field[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const addField = () =>
    setFields((p) => [...p, { label: "", name: "", type: "text", required: false, options: [] }]);

  const updateField = (i: number, key: keyof Field, value: any) => {
    setFields((prev) => {
      const next = [...prev];

      if (key === "label") {
        const base = toKey(value || "");
        const existing = new Set(next.map((f, idx) => (idx === i ? "" : f.name)).filter(Boolean));
        const name = base ? uniqueKey(base, existing) : "";
        next[i] = { ...next[i], label: value, name };
      } else {
        // @ts-ignore
        next[i] = { ...next[i], [key]: value };
      }
      return next;
    });
  };

  const removeField = (i: number) => setFields((p) => p.filter((_, idx) => idx !== i));

  const validateClient = (): boolean => {
    const e: Errors = { fieldErrors: {} };

    if (title.trim().length < 3) e.title = "Title must be at least 3 characters.";
    if (description.trim().length < 10)
      e.description = "Description must be at least 10 characters.";
    if (!image) e.image = "Cover image is required.";
    if (fields.length < 1) e.fields = "Add at least one registration field.";

    fields.forEach((f, i) => {
      const fe: Partial<Record<keyof Field, string>> = {};
      if (!f.label.trim()) fe.label = "Label is required.";
      if (!f.name) fe.name = "Key could not be generated. Change label.";
      if (f.type === "select" && (!f.options || f.options.filter(Boolean).length === 0)) {
        fe.options = "Select fields must have at least one option.";
      }
      if (Object.keys(fe).length) (e.fieldErrors as any)[i] = fe;
    });

    const keys = fields.map((f) => f.name).filter(Boolean);
    const hasDuplicateKeys = new Set(keys).size !== keys.length;
    if (hasDuplicateKeys) {
      e.fields = "Two fields have the same key. Change labels to be unique.";
    }

    if (deadline) {
      const iso = new Date(deadline).toISOString();
      if (Number.isNaN(new Date(iso).getTime())) e.deadline = "Invalid deadline format.";
    }

    setErrors(e);
    const hasErrors =
      !!e.title ||
      !!e.description ||
      !!e.image ||
      !!e.deadline ||
      !!e.fields ||
      Object.keys(e.fieldErrors || {}).length > 0;

    return !hasErrors;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setServerError(null);
    setSuccess(null);

    if (!validateClient()) return;

    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("title", title);
      fd.append("description", description);
      if (deadline) fd.append("deadline", new Date(deadline).toISOString());
      fd.append("image", image!);
      fd.append("fields", JSON.stringify(fields));

      await createEvent(fd, token);

      setSuccess("Event created successfully 🎉");
      setTitle("");
      setDescription("");
      setDeadline("");
      setImage(null);
      setFields([]);
      setErrors({});
    } catch (err: any) {
      setServerError(err?.message || "Server rejected the request. Check fields & try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl p-6 md:p-10 bg-black/60 backdrop-blur-xl border border-green-500/30 shadow-[0_0_60px_rgba(34,197,94,0.35)]">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Create New Event</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Event Details */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <h3 className="text-lg font-semibold text-white mb-4">Event Details</h3>

          <input
            className={`${inputBase} px-4 py-3 ${errors.title ? "border-red-500" : ""}`}
            placeholder="Event Title (min 3 chars)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title}</p>}

          <textarea
            className={`${inputBase} px-4 py-3 mt-4 min-h-[110px] ${
              errors.description ? "border-red-500" : ""
            }`}
            placeholder="Description (min 10 chars)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}

          <input
            type="datetime-local"
            className={`${inputBase} px-4 py-3 mt-4 ${errors.deadline ? "border-red-500" : ""}`}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          {errors.deadline && <p className="text-xs text-red-400 mt-1">{errors.deadline}</p>}
        </section>

        {/* Image */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <h3 className="text-lg font-semibold text-white mb-4">Cover Image</h3>
          <input
            type="file"
            accept="image/*"
            className={`w-full text-gray-300 ${errors.image ? "text-red-400" : ""}`}
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          {errors.image && <p className="text-xs text-red-400 mt-1">{errors.image}</p>}
        </section>

        {/* Fields */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Registration Fields</h3>
            <button type="button" onClick={addField} className="px-4 py-2 rounded-full bg-green-500 text-black text-sm font-semibold">
              + Add Field
            </button>
          </div>

          {errors.fields && <p className="text-xs text-red-400 mb-2">{errors.fields}</p>}

          <div className="space-y-4">
            {fields.map((f, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div>
                    <input
                      className={`${inputBase} px-3 py-2 ${errors.fieldErrors?.[i]?.label ? "border-red-500" : ""}`}
                      placeholder="Label"
                      value={f.label}
                      onChange={(e) => updateField(i, "label", e.target.value)}
                    />
                    {errors.fieldErrors?.[i]?.label && (
                      <p className="text-xs text-red-400 mt-1">{errors.fieldErrors[i]!.label}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Key: <span className="text-green-400">{f.name || "auto-generated"}</span>
                    </p>
                  </div>

                  <select
                    className={`${inputBase} px-3 py-2`}
                    value={f.type}
                    onChange={(e) => updateField(i, "type", e.target.value)}
                  >
                    <option value="text">Text</option>
                    <option value="textarea">Textarea</option>
                    <option value="select">Select</option>
                    <option value="checkbox">Checkbox</option>
                  </select>

                  <label className="flex items-center gap-2 text-sm text-gray-300">
                    <input
                      type="checkbox"
                      checked={f.required}
                      onChange={(e) => updateField(i, "required", e.target.checked)}
                    />
                    Required
                  </label>
                </div>

                {f.type === "select" && (
                  <div className="mt-3">
                    <input
                      className={`${inputBase} px-3 py-2 ${
                        errors.fieldErrors?.[i]?.options ? "border-red-500" : ""
                      }`}
                      placeholder="Options (comma separated)"
                      value={f.options?.join(",") || ""}
                      onChange={(e) =>
                        updateField(
                          i,
                          "options",
                          e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean)
                        )
                      }
                    />
                    {errors.fieldErrors?.[i]?.options && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors.fieldErrors[i]!.options}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex justify-end mt-3">
                  <button
                    type="button"
                    onClick={() => removeField(i)}
                    className="text-sm text-red-400 hover:text-red-300"
                  >
                    Remove field
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {serverError && <p className="text-sm text-red-400">{serverError}</p>}
        {success && <p className="text-sm text-green-400">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-700 via-green-500 to-green-400 text-black font-semibold shadow-[0_0_40px_rgba(34,197,94,0.8)] hover:shadow-[0_0_70px_rgba(34,197,94,1)] transition-all disabled:opacity-60"
        >
          {loading ? "Creating Event..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default EventCreatorForm;