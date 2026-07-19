export default function BrokerDashboard(){

return(

<div className="p-6">

<h1 className="text-2xl font-bold">
لوحة الوسيط
</h1>


<div className="border p-4 mt-4 rounded">

<h2 className="font-bold">
طلب جديد
</h2>

<p>
شقة للبيع - القاهرة الجديدة
</p>

<p>
الميزانية: 2,500,000 جنيه
</p>


<button className="bg-green-600 text-white p-3 rounded mt-3">
أنا مهتم بهذا العميل
</button>

</div>


<div className="border p-4 mt-4">

<h2>
الاشتراك
</h2>

<p>
الحالة: نشط
</p>

<button className="bg-blue-600 text-white p-2 rounded">
تجديد الاشتراك
</button>

</div>


</div>

)

}