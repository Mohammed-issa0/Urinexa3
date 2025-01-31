// ThankYou.jsx
import React, { useEffect } from "react";
import { CircleCheckBig } from "lucide-react";
import ReactPixel from "react-facebook-pixel";

export default function ThankYou() {
  useEffect(() => {
    // تتبع حدث "Purchase" عند تحميل الصفحة
    ReactPixel.track("Purchase", {
      value: 100.0, // قيمة الشراء
      currency: "TND", // العملة (تونسية دينار)
      content_name: "Urinexa Product", // اسم المنتج أو الخدمة
      content_category: "Health Supplement", // فئة المنتج
      content_ids: ["product_123"], // معرفات المنتجات إذا كانت متاحة
      content_type: "product",
      num_items: 1, // عدد العناصر
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-6">
        <CircleCheckBig className="h-16 w-16 text-green-600 mr-2" />
        <h1 className="text-3xl text-center font-bold text-green-600" dir="rtl">
          شكراً لك، تم إستلام طلبك وسيتم التواصل معك خلال 24 ساعة لتأكيد الطلب
          وتوصيله لك.
        </h1>
      </div>
    </div>
  );
}
