import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf } from 'react-icons/fa';

const ingredients = [
  {
    name: "مستخلص النخيل",
    benefit: "يحسّن تدفق الدم ويعزز صحة البروستاتا"
  },
  {
    name: "مستخلص نبات القراص",
    benefit: "يقلل من اضطرابات التبول ويحمي من سرطان البروستاتا"
  },
  {
    name: "حمض الفوليك (B9)",
    benefit: "يحسّن جودة وعدد الحيوانات المنوية"
  },
  {
    name: "الزنك",
    benefit: "يحفز إنتاج هرمونات الذكورة ويعزز الخصوبة"
  }
];

function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // التأثير التدرجي
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-16 bg-green-100" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl text-primary font-bold text-center mb-12"
        >
          كيف يعمل المنتج؟
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{ingredient.name}</h3>
              <p className="text-gray-600">{ingredient.benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
