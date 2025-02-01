import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Stc = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  // قيمة العد التصاعدي
  const count1 = useSpring(0, { stiffness: 100, damping: 30 });
  const count2 = useSpring(0, { stiffness: 100, damping: 30 });

  // تحويل القيمة إلى نسبة مئوية
  const percentage1 = useTransform(count1, (value) => Math.round(value) + "%");
  const percentage2 = useTransform(count2, (value) => Math.round(value) + "%");

  useEffect(() => {
    if (inView) {
      // بدء العد التصاعدي عند ظهور العنصر
      count1.set(52); // القيمة النهائية للعداد الأول
      count2.set(85); // القيمة النهائية للعداد الثاني
    }
  }, [inView, count1, count2]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto mb-12"
    >
      <p className="text-lg text-gray-700 mb-6">
        وفقاً للإحصائيات،
        <motion.span className="text-red-600 text-2xl font-bold">
          {percentage1}
        </motion.span>
        من الرجال فوق سن الأربعين يعانون من مشاكل جنسية تؤثر سلباً على ثقتهم وعلاقاتهم.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        ومع ذلك،
        <motion.span className="text-red-600 text-2xl font-bold">
          {percentage2}
        </motion.span>
        منهم لا يتحدثون عن هذه المشكلات ولا يبحثون عن حلول فعالة بسبب الإحراج أو عدم معرفة الحلول الآمنة.
      </p>
    </motion.div>
  );
};

export default Stc;