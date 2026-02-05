import { useEffect, useState } from "react";
import { useAuth } from "../auth/authContext";
import {
  getAllApplications,
  getFilledApplication,
} from "../services/application.service";
import type { Application } from "../types/application.types";
import AdminApplications from "../components/AdminApplications";
import ApplicationForm from "../components/ApplicationForm";
import SubmittedApplication from "../components/SubmittedApplications";

const ApplicationPage = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState<Application | null>(null);
  const [allApplications, setAllApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.role === "ADMIN") {
          const res = await getAllApplications();
          setAllApplications(res.forms);
        } else {
          const res = await getFilledApplication();
          setApplication(res.application);
        }
      } catch {
        // USER has not submitted any application
        setApplication(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (user?.role === "ADMIN") {
    return <AdminApplications applications={allApplications} />;
  }

  if (!application) {
    return <ApplicationForm onSubmitted={setApplication} />;
  }

  return <SubmittedApplication application={application} />;
};

export default ApplicationPage;
