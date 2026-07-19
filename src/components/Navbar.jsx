import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Dealak</h1>
      <div className="space-x-4">
        <Link to="/">الرئيسية</Link>
        <Link to="/create-request">إنشاء طلب</Link>
        <Link to="/broker-register">تسجيل وسيط</Link>
        <Link to="/admin-dashboard">لوحة الإدارة</Link>
      </div>
    </nav>
  );
}
