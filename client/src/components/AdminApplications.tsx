import { useState } from "react";
import { updateApplicationStatus } from "../services/application.service";
import type { Application, ApplicationStatus } from "../types/application.types";
import {
  CheckCircle2,
  XCircle,
  Clock,
  User,
  ListChecks,
} from "lucide-react";

const statusConfig = {
  pending: {
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    icon: Clock,
  },
  accepted: {
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    icon: CheckCircle2,
  },
  rejected: {
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: XCircle,
  },
};

const AdminApplications = ({
  applications,
}: {
  applications: Application[];
}) => {
  const [data, setData] = useState<Application[]>(applications);
  const [updatingUser, setUpdatingUser] = useState<string | null>(null);

  const handleStatusChange = async (
    userId: string,
    status: ApplicationStatus
  ) => {
    if (updatingUser === userId) return;

    setUpdatingUser(userId);
    try {
      const res = await updateApplicationStatus({
        userId,
        newStatus: status,
      });

      // ✅ Update local state using backend response
      setData((prev) =>
        prev.map((app) =>
          app.user === userId
            ? { ...app, status: res.application.status }
            : app
        )
      );
    } catch (error) {
      console.error("Failed to update status", error);
    } finally {
      setUpdatingUser(null);
    }
  };

  return (
    <div className="min-h-screen mt-25 bg-black p-4 md:p-8 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            Application Management
          </h1>
          <p className="text-gray-500 mt-2">
            Review and manage member applications for GFG RGIPT.
          </p>
        </header>

        <div className="grid gap-6">
          {data.map((app) => {
            const statusMeta =
              statusConfig[app.status as keyof typeof statusConfig];
            const StatusIcon = statusMeta.icon;

            return (
              <div
                key={app._id}
                className={`group relative bg-[#0e0e0e] border ${
                  updatingUser === app.user
                    ? "border-green-500"
                    : "border-white/10"
                } rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20">
                      <User className="w-6 h-6 text-green-500" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        {app.rollNo}
                        <span
                          className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusMeta.bg} ${statusMeta.color} ${statusMeta.border}`}
                        >
                          {app.status}
                        </span>
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <ListChecks className="w-4 h-4" />
                        <span>
                          {app.preference1} • {app.preference2} •{" "}
                          {app.preference3}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-3">
                    <div className="flex bg-black border border-white/10 p-1 rounded-xl">
                      {(
                        ["pending", "accepted", "rejected"] as ApplicationStatus[]
                      ).map((s) => (
                        <button
                          key={s}
                          disabled={
                            updatingUser === app.user || app.status === s
                          }
                          onClick={() => handleStatusChange(app.user, s)}
                          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 capitalize
                            ${
                              app.status === s
                                ? "bg-white/10 text-white shadow-inner"
                                : "text-gray-500 hover:text-white hover:bg-white/5"
                            }
                            ${
                              updatingUser === app.user
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }
                          `}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <div
                      className={`p-2 rounded-full border ${statusMeta.border}`}
                    >
                      <StatusIcon
                        className={`w-5 h-5 ${statusMeta.color}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Loading Overlay */}
                {updatingUser === app.user && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] rounded-2xl flex items-center justify-center">
                    <div className="flex items-center gap-2 text-green-500 font-medium">
                      <div className="h-4 w-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                      Updating...
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {data.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-gray-500 italic">
              No applications found to review.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApplications;
