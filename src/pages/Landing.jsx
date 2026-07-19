import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">صفقتك العقارية تبدأ من طلبك</h1>
      <p className="mb-4">أخبرنا بما تبحث عنه، وسيتواصل معك الوسطاء المناسبون.</p>
      <div>
        <Link to="/create-request" className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2">ابدأ طلبك الآن</Link>
        <Link to="/broker-register" className="bg-gray-600 text-white px-4 py-2 rounded-lg m-2">أنا وسيط عقاري</Link>
      </div>
      <section className="mt-6">
        <h2 className="font-bold mb-2">كيف تعمل Dealak؟</h2>
        <ol className="list-decimal list-inside">
          <li>أنشئ طلبك العقاري</li>
          <li>يستلم الوسطاء طلبك</li>
          <li>اختر الوسيط المناسب</li>
        </ol>
      </section>
    </div>
  );
}
