import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function Hero({ isModalOpen, setIsModalOpen }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const videoSrc = "/vd.mp4";

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  // إعدادات الأنيمشن للتسلسل
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // تأخير بين كل عنصر والآخر
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-gradient-to-r from-[#12e45b] to-[#46b99a] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            استعد <span className='text-primary'>قوتك وثقتك</span>.. وأعد شعلتك العاطفية <span className='text-primary'>مع شريكتك</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl mb-8"
          >
            تعرّف على الحل الطبيعي الذي يعيد لك نشاطك الجنسي، يمنحك ثقة لا مثيل لها، ويعيد إشعال الشغف في علاقتك الزوجية!
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-primary"
          >
            <video 
              ref={videoRef}
              src={videoSrc} 
              type="video/mp4" 
              autoPlay 
              loop 
              muted={isMuted} 
              className="w-full h-full object-cover"
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-[6.75rem] bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
            </button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <CTAButton isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
