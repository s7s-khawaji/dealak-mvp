import { requests } from "../data/mockData";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {
  const request = requests[0];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        لوحة العميل
      </h1>

      <div className="border rounded-lg p-4 shadow">
        <h2 className="font-bold text-xl">
          {request.property}
        </h2>

        <p>{request.location}</p>
        <p>الميزانية: {request.budget}</p>

        <p className="mt-3">
          الحالة:
          <br />
          {request.status}
        </p>

        <p className="mt-3">
          الوسطاء المهتمون:
          {request.interestedBrokers}
        </p>

        <Link
          to="/brokers"
          className="block text-center bg-blue-600 text-white p-3 rounded mt-4"
        >
          عرض الوسطاء
        </Link>
      </div>
    </div>
  );
}