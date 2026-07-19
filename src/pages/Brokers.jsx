import { brokers } from "../data/mockData";
import { useState } from "react";

export default function Brokers() {

  const [selected, setSelected] = useState(false);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        الوسطاء المهتمون
      </h1>

      {brokers.map((broker)=>(
        <div 
          key={broker.id}
          className="border rounded-lg p-4 mb-4 shadow"
        >

          <h2 className="font-bold text-lg">
            {broker.name}
          </h2>

          <p>
            المنطقة: {broker.area}
          </p>

          <p>
            الخبرة: {broker.experience}
          </p>

          <button
            onClick={()=>setSelected(true)}
            className="bg-green-600 text-white px-4 py-2 rounded mt-3"
          >
            اختيار هذا الوسيط
          </button>

        </div>
      ))}


      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-lg">

            <h2 className="font-bold text-xl">
              تم اختيار الوسيط بنجاح
            </h2>

            <p>
              الهاتف: 01000000000
            </p>

            <p>
              واتساب: متاح
            </p>

          </div>

        </div>
      )}

    </div>
  );
}