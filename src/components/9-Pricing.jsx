import React from "react";
import { Check, Timer } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function Pricing({ isModalOpen, setIsModalOpen }) {
  const benefits = [
    "خالي من أي تأثيرات جانبية",
    "موثق من وزارة الصحة",
    "محقق لضمان الجودة",
    "ضمان الماركة المعتمدة",
    "منتج طبيعي 100% خالي من أي تركيبات كيميائية",
    "ضمان الإستبدال أو الإرجاع",
    "مناسب لمرضى السكري والضغط وأمراض القلب",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      id="price"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="py-16 bg-gradient-to-br from-red-500 to-red-700"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 text-center flex flex-col items-center">
            {/* <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-4 tracking-wide"
            >
              السعر
            </motion.h2> */}

            <motion.div variants={itemVariants} className="relative mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 relative z-10 flex gap-2 items-center">
                <span className="text-xl text-gray-600 sm:2xl md:text-3xl mr-3">السعر الأصلي :</span>
                <span className="bg-gray-600 text-2xl text-white px-1 rounded-md line-through">
                  240 <span className="text-2xl">دينار</span>
                </span>
              </div>
              <div className="text-4xl flex flex-col mt-3 sm:text-5xl md:text-6xl font-bold text-gray-900 relative z-10 flex gap-2 items-center">
                <span className="text-4xl text-green-600 sm:2xl md:text-3xl mr-3 mb-1 font-bold">-العرض الحالي-</span>
                <span className="bg-green-600 text-white px-1 rounded-md pb-3">
                120 <span className="text-2xl">ديناراً فقط!</span>
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-200 font-extrabold text-8xl opacity-10">
                فرصة
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-red-600 mb-1"
            >
              <Timer className="h-6 w-6 animate-pulse" />
              <span className="font-semibold text-lg">
              عدد محدود: 9 عبوات متبقية فقط!
              </span>
            </motion.div>
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-sm text-black mb-4"
            >
              (اضغط الآن وابدأ رحلة جديدة مليئة بالسعادة والشغف الزوجي.)
            </motion.p>
            <CTAButton />
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 mt-10 gap-4 text-right items-center justify-center"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-lg hover:rotate-2 cursor-pointer"
                >
                  <Check className="h-7 w-7 font-bold text-white bg-[#137131] rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
