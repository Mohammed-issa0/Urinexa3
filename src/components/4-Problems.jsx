import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Frown,ThumbsDown,CircleX,ShieldX,PowerOff } from "lucide-react";
import sman from '../../public/images/sman.png'
const ProblemsSection = ({ isModalOpen, setIsModalOpen }) => {
  const problems = [
    {
      icon: <Frown  className=" text-2xl" />,
      title: 'ضعف الانتصاب',
      description: 'يؤثر على العلاقة والثقة بالنفس.'

    },
    {
      icon: <PowerOff className=" text-2xl" />,
      title: 'انخفاض الرغبة الجنسية',
      description: 'مما يضعف العلاقة الزوجية'
    },
    {
      icon: <FaExclamationTriangle className=" text-2xl" />,
      title: 'صعوبة الإنجاب',
      description: 'بسبب قلة جودة الحيوانات المنوية'
    },
    {
      icon: <CircleX  className=" text-2xl" />,
      title: 'سرعة القذف',
      description: 'مما يقصر من مدة العلاقة والرضا عنها'
    },
    {
      icon: <ShieldX  className=" text-2xl" />,
      title: 'مشاكل صحية مزمنة',
      description: 'مثل السكري وضغط الدم، التي تُضعف الأداء الجنسي'
    },
    {
      icon: <ThumbsDown className=" text-2xl" />,
      title: 'التقدم بالعمر',
      description: 'حيث تقل القدرة الجنسية بشكل طبيعي'
    },
    {
      icon: <FaExclamationTriangle className=" text-2xl" />,
      title: ' قلق وتوتر نفسي',
      description: 'يعيق تحقيق الأداء المطلوب'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-red-100">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
           
إذا كنت تواجه أيّاً من هذه التحديات، فإن <span className='text-primary'>Urinexa</span> هو الحل المناسب لك:

          </h2>
         
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col  items-center space-x-4 space-x-reverse text-center">
                <div className="bg-red-50 p-3 rounded-full text-primary">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-black py-1">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <img src={sman} className='mb-[-80px]'/>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemsSection;