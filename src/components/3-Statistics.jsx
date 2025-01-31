import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTAButton from './CTAButton';
import { CircleAlert,ChartColumnBig } from "lucide-react";
function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* الجزء الأول */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            وفقاً للإحصائيات،<span className='text-primary'> 52% من الرجال</span> فوق سن الأربعين يعانون من مشاكل جنسية تؤثر سلباً على ثقتهم وعلاقاتهم.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            ومع ذلك،<span className='text-primary'> 85% </span>منهم لا يتحدثون عن هذه المشكلات ولا يبحثون عن حلول فعالة بسبب الإحراج أو عدم معرفة الحلول الآمنة.
          </p>
        </motion.div>

        {/* الجزء الثاني */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            لكن ماذا لو كان هناك <span className='text-primary'>منتج طبيعي 100%</span> يعيد إليك قوتك وثقتك دون أي قلق؟
          </p>
        </motion.div>

        {/* الجزء الثالث */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-xl font-bold text-primary">
            Urinexa هو منتج مُثبت علمياً تم تصميمه ليكون الحل المثالي لكل من يبحث عن حياة زوجية مليئة بالشغف والرضا.
          </p>
        </motion.div>

        {/* الجزء الرابع (لماذا الآن؟) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-red-50 p-8 rounded-lg shadow-lg mb-12"
        >
          <CircleAlert className="h-14 w-14 text-red-600 mx-auto" />
          <p className="text-gray-700 mb-6 text-center">
            بسبب ندرة المكونات المستخدمة والطلب الهائل على Urinexa، يُسمح باستيراد 150 عبوة فقط شهرياً.
            فإذا لم تقم بالحجز الآن، فقد تضطر للانتظار شهوراً أخرى للحصول على منتجنا الفريد. لا تفوّت فرصة تحسين حياتك الزوجية، خاصة عندما تكون بين يديك الآن.
          </p>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              color: ["#DC2626", "#991B1B", "#DC2626"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl font-bold text-center"
          >
            9/150 عبوة متبقية
          </motion.div>
          <div className="mt-6">
            <CTAButton />
          </div>
        </motion.div>

       

      </div>
    </section>
  );
}

export default Statistics;
