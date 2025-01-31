import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import CTAButton from './CTAButton';

const benefits = [
  {
    title: "تحسين الانتصاب",
    description: "زيادة تدفق الدم للحصول على انتصاب قوي ومستدام"
  },
  {
    title: "تعزيز الثقة بالنفس",
    description: "من خلال تحسين الأداء الجنسي بشكل ملحوظ"
  },
  {
    title: "علاقة زوجية أقوى",
    description: "عبر تحسين الرضا لك ولشريكتك"
  },
  {
    title: "نتائج تدوم طويلاً",
    description: "تأثير يدوم حتى 36 ساعة لتوفير مرونة كاملة"
  },
  {
    title: "حل طبيعي وآمن",
    description: "خالٍ من أي مواد كيميائية، آمن لمرضى السكري وضغط الدم"
  }
];

function Benefits() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // التأثير التدرجي
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-200 to-green-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          ماذا سيحقق لك <span className='text-primary'>Urinexa</span> ؟
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <CTAButton/>
      </div>
    </section>
  );
}

export default Benefits;
