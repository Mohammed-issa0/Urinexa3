import React from "react";
import { UserCircle2 } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
export default function Story({ isModalOpen, setIsModalOpen }) {
  const listAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="py-16 bg-amber-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ threshold: 0.7 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <motion.div
            variants={listAnimation}
            className="flex items-center mb-6"
          >
            <UserCircle2 className="h-12 w-12 text-[#137131] ml-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">قصة عمر</h3>
              <p className="text-gray-600">تجربة حقيقية مع Urinexa</p>
            </div>
          </motion.div>

          <motion.div
            variants={listAnimation}
            className="space-y-4 text-gray-700"
          >
            <motion.p variants={listAnimation}>
            عمر، رجل أربعيني ناجح، كان يعاني من ضعف في الأداء الجنسي بسبب ضغوط العمل والحياة اليومية. 
            </motion.p>
            <motion.p variants={listAnimation}>
            بعد تجربة العديد من الحلول دون جدوى، وجد الحل المثالي مع Urinexa.
            </motion.p>
            
            <motion.p
              variants={listAnimation}
              className="font-semibold text-[#137131] text-xl"
            >
              في غضون أيام، لاحظ تغييراً كبيراً في حياته. استعاد ثقته بنفسه، أصبحت علاقته 
الزوجية أكثر قوة، وعاد شعور الشغف الذي افتقده لسنوات.
Urinexa ليس مجرد منتج؛ إنه بداية جديدة لحياة زوجية مليئة بالسعادة.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
