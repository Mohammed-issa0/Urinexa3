import { FaLeaf, FaShieldAlt, FaClock } from 'react-icons/fa';

function TrustIndicators({ isModalOpen, setIsModalOpen }) {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaLeaf className="text-4xl text-primary mb-4" />
            <p className="font-semibold">منتج طبيعي 100%</p>
          </div>
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-primary mb-4" />
            <p className="font-semibold">موثق من وزارة الصحة</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-4xl text-primary mb-4" />
            <p className="font-semibold">ضمان استرداد الأموال</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;