import { useNavigate } from "react-router-dom";

export default function CreateRequest() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <label>نوع العملية</label>
      <select className="border p-2 w-full">
        <option>شراء</option>
        <option>إيجار</option>
      </select>

      <label>نوع العقار</label>
      <select className="border p-2 w-full">
        <option>شقة</option>
        <option>فيلا</option>
        <option>مكتب</option>
        <option>أرض</option>
      </select>

      <label>المنطقة</label>
      <select className="border p-2 w-full">
        <option>القاهرة الجديدة</option>
        <option>التجمع الخامس</option>
        <option>الشيخ زايد</option>
        <option>مدينة نصر</option>
      </select>

      <label>الميزانية</label>
      <input type="text" className="border p-2 w-full" />

      <label>مستوى الجدية</label>
      <select className="border p-2 w-full">
        <option>خلال أسبوع</option>
        <option>خلال شهر</option>
        <option>خلال 3 أشهر</option>
        <option>استكشاف فقط</option>
      </select>

      <label>طريقة التواصل</label>
      <select className="border p-2 w-full">
        <option>اتصال</option>
        <option>واتساب</option>
        <option>أي وسيلة</option>
      </select>

      <label>حالة التمويل</label>
      <select className="border p-2 w-full">
        <option>جاهز</option>
        <option>غير جاهز</option>
        <option>أبحث عن تمويل</option>
      </select>

      <label>رقم الهاتف</label>
      <input type="text" className="border p-2 w-full" />

      <button type="submit" className


<button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
      >
        إرسال الطلب
      </button>
    </form>
  );
}