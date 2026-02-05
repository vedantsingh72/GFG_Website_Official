import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  submitApplication,
  getFilledApplication,
  withdrawApplication,
} from "../services/application";
import { useAuth } from "../auth/authContext";

const baseInput =
  "w-full rounded-xl bg-[#0b0f14] border border-white/15 px-4 py-3 text-gray-200 placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 focus:bg-[#0b0f14]";

const selectCls =
  "w-full rounded-xl bg-[#0b0f14] border border-white/15 px-4 py-3 text-gray-200 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 focus:bg-[#0b0f14]";

const textareaCls =
  "w-full min-h-[120px] rounded-xl bg-[#0b0f14] border border-white/15 px-4 py-3 text-gray-200 placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 focus:bg-[#0b0f14] resize-y";

const RealGfgJoin = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;

  const [form, setForm] = useState({
    rollNo: "",
    MobileNo: "",
    preference1: "",
    preference2: "",
    preference3: "",
    skills: "",
    reason: "",
    OtherClubs: "",
  });

  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [applied, setApplied] = useState(false);
  const [status, setStatus] = useState<"pending" | "accepted" | "rejected" | "">("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    const checkFilled = async () => {
      try {
        const res = await getFilledApplication(token);
        if (res?.application) {
          setApplied(true);
          setStatus(res.application.status);
        }
      } finally {
        setChecking(false);
      }
    };
    checkFilled();
  }, [token]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const payload = {
        ...form,
        skills: form.skills.split(",").map((s) => s.trim()),
        OtherClubs: form.OtherClubs.split(",").map((s) => s.trim()),
      };

      await submitApplication(payload, token);
      setApplied(true);
      setStatus("pending");
      setSuccess("🎉 Application submitted successfully!");
    } catch (err: any) {
      setError(err?.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await withdrawApplication(token);
      setApplied(false);
      setStatus("");
      setSuccess("Application withdrawn successfully.");
    } catch (err: any) {
      setError(err?.message || "Failed to withdraw application");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return <p className="text-center text-emerald-400">Checking your application status...</p>;
  }

  return (
    <div className="space-y-4">
      {!applied && (
        <>
          <input name="rollNo" placeholder="Roll No (25cs3013)" onChange={handleChange} className={baseInput} />
          <input name="MobileNo" placeholder="Mobile No" onChange={handleChange} className={baseInput} />

          <select name="preference1" onChange={handleChange} className={selectCls}>
            <option className="bg-[#0b0f14] text-gray-200" value="">Preference 1</option>
            <option className="bg-[#0b0f14] text-gray-200">Technical Team</option>
            <option className="bg-[#0b0f14] text-gray-200">Design Team</option>
            <option className="bg-[#0b0f14] text-gray-200">Media Team</option>
          </select>

          <select name="preference2" onChange={handleChange} className={selectCls}>
            <option className="bg-[#0b0f14] text-gray-200" value="">Preference 2 (optional)</option>
            <option className="bg-[#0b0f14] text-gray-200">Technical Team</option>
            <option className="bg-[#0b0f14] text-gray-200">Design Team</option>
            <option className="bg-[#0b0f14] text-gray-200">Media Team</option>
          </select>

          <select name="preference3" onChange={handleChange} className={selectCls}>
            <option className="bg-[#0b0f14] text-gray-200" value="">Preference 3 (optional)</option>
            <option className="bg-[#0b0f14] text-gray-200">Technical Team</option>
            <option className="bg-[#0b0f14] text-gray-200">Design Team</option>
            <option className="bg-[#0b0f14] text-gray-200">Media Team</option>
          </select>

          <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className={baseInput} />
          <input name="OtherClubs" placeholder="Other clubs (comma separated)" onChange={handleChange} className={baseInput} />
          <textarea name="reason" placeholder="Why do you want to join GFG?" onChange={handleChange} className={textareaCls} />
        </>
      )}

      <button
        onClick={applied ? handleWithdraw : handleSubmit}
        disabled={loading}
        className="mt-4 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400 transition disabled:opacity-60"
      >
        {loading ? "Processing..." : applied ? "Withdraw Application" : "Submit Application"}
      </button>

      {success && <p className="text-center text-emerald-400">{success}</p>}
      {error && <p className="text-center text-red-400">{error}</p>}
    </div>
  );
};

export default RealGfgJoin;