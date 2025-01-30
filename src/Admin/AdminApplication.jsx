import { useEffect, useState } from "react";
import AdminLayout from "./Admin Components/AdminLayout";
import ApplicationCard from "./Admin Components/ApplicationCard";

export default function AdminApplication() {
  const [allApplication, setAllApplication] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllApplication();
  }, []);

  const fetchAllApplication = async () => {
    try {
      let response = await fetch(
        `https://hackathon-backend-production-6a74.up.railway.app/api/loan/getAllRequest`
      );
      response = await response.json();
      setAllApplication(response?.data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-center my-6">Loan Applications</h1>
      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {allApplication.map((application) => (
            <ApplicationCard key={application._id} application={application} />
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
