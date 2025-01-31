import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import green from '../../public/images/green.jpg'
const faqs = [
  {
    question: "هل المنتج آمن؟",
    answer: "نعم، منتج طبيعي 100%، موثق من وزارة الصحة، وآمن لمرضى السكري والضغط وأمراض القلب."
  },
  {
    question: "كم من الوقت يستغرق لرؤية النتائج؟",
    answer: "يبدأ الشعور بالتحسن خلال أيام قليلة من الاستخدام."
  },
  {
    question: "هل المنتج مناسب للجميع؟",
    answer: "المنتج مصمم خصيصاً للرجال الذين يواجهون مشاكل في الأداء الجنسي أو الرغبة."
  }
];

function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-3xl font-bold text-center mb-12"
        >
          الأسئلة الشائعة
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-4 "
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-primary"
            >
              <button
                className="w-full px-6 py-4 text-right flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-primary" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <img src={green} className='mt-[20px] h-[200px] mx-auto mb-[-30px]'/>
    </section>
  );
}

export default FAQ;