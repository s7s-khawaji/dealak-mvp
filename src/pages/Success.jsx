import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">
        ✓ تم إرسال طلبك بنجاح
      </h1>

      <p className="mt-4">
        بدأنا البحث عن الوسطاء المناسبين لك.
      </p>

      <Link
        to="/customer-dashboard"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        متابعة الطلب
      </Link>
    </div>
  );
}