import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

function Footer() {
  return (
    <section className="bg-amber-50 text-black py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">
            هل ستعود لحياتك الروتينية المليئة بالإحباط أم أنك ستغتنم هذه الفرصة الفريدة لاستعادة قوتك وثقتك وتحقيق السعادة لك ولشريكتك؟
          </h2>
          <p className="text-2xl font-bold mb-8">"الفرصة بين يديك الآن. اغتنمها!"</p>
          <CTAButton />
        </motion.div>
      </div>
    </section>
  );
}

export default Footer;