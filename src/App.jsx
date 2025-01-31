import Hero from './components/2-Hero';
import Statistics from './components/3-Statistics';
import Problems from './components/4-Problems';
import Benefits from './components/5-Benefits';
import HowItWorks from './components/6-HowItWorks';
import SuccessStory from './components/7-SuccessStory';
import Testimonials from './components/8-Testimonials';
import Pricing from './components/9-Pricing';
import FAQ from './components/10-FAQ';
import TrustIndicators from './components/11-TrustIndicators';
import Footer from './components/12Footer';
import Navbar from './components/1-Navbar';
import "./index.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    processed: false,
    method: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // hadnle send
  const handleSend = async () => {
    const { name, phone } = formData;

    if (!name || !phone) {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }
    setLoading(true);
    try {
      // إرسال البيانات إلى Firestore
      await addDoc(collection(db, "orders"), {
        name,
        phone,
        timestamp: new Date(),
      });

      // التنقل إلى صفحة الشكر
      navigate("/thank-you");
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
      alert("عذرًا، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false); // انتهاء التحميل
      setIsModalOpen(false); // غلق النافذة بعد الإرسال
    }

    setIsModalOpen(false); // غلق النافذة بعد الإرسال
  };

  return (
    <div className="bg-secondary ">

 {/* Modal */}
 {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">طلب جديد</h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  رقم الهاتف
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
            </form>

            <div className="flex justify-end mt-6 space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                إلغاء
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                {loading ? "جارٍ الإرسال..." : "إرسال"}{" "}
              </button>
            </div>
          </div>
          {loading && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      )}

      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Statistics isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Problems isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Benefits isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <SuccessStory isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <HowItWorks isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Pricing isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Testimonials isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <FAQ isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      {/* <TrustIndicators /> */}
      <Footer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;