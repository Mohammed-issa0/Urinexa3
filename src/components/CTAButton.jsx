import { ShoppingCart } from "lucide-react";
import {motion} from 'framer-motion'
export default function CTAButton({ isModalOpen, setIsModalOpen }) {
  return (
    <>
    <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
           <button
        className="bg-[#137131] mx-auto hover:bg-[#0b471e] transition text-white text-xl font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 flex gap-1 items-center"
        onClick={() => setIsModalOpen(true)}
      >
        <ShoppingCart className="ml-2 h-5 w-5" />
        إطلبه الآن
      </button>
        </motion.div>
     
    </>
  );
}
