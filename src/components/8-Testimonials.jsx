import React from "react";
import { Star, UserCircle2 } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonials({ isModalOpen, setIsModalOpen }) {
  const testimonials = [
    {
      name: "محمد الورتاني",
      age: "45 سنة",
      text: "جربت منتوج سمح عربي مدة شهرين شفت منو نتائج إيجابية بارشا و حسيت بفرق في انتصاب و خاصة في البول و رتحت من برستات ربي باركلكهم",
      rating: 5,
    },
    {
      name: "فرحات من قلبي",
      age: "52 سنة",
      text: "بكل صدق و أمانة شريت منتج urinexa عاوني برشا في علاقتي الجنسية و رجعت نمارس في علاقتي مع زوجتي بكل ثيقة يعني ولات عندي قدرة كبيرة في الممارسة حتى التوتر الي كنت نحس بيه نقص برشا. ننصح اي حد عندو مشاكل كيفي يستعملو.",
      rating: 5,
    },
    {
      name: "بوبكر دهماني",
      age: "38 سنة",
      text: "سرعة قذف تعبتني نفسياً وقت شفت منتوج هذا يشكرولي فيه شريتو بصراحة كنت متردد كيف شربتو حسيت بفرق كبير ولات عندي رغبة و نطول في علاقتي حتى من الجودة تحسنت و تنظمت. نشكر الجماعة الي خدموه و ننصحكم بيه",
      rating: 5,
    },
    {
      name: "بشير زوادي من المهدية",
      age: "40 سنة",
      text: "نعاني مشاكل في البروستات و كثرة تبول خاصة في الليل لمدة 3 سنين و عطاني الطبيب دواء اما مزلت متقلق استعملت المنتوج و الحق ساعدني ربي يباركلكم",
      rating: 4,
    },
    {
      name: "انور مهيري من المنستير",
      age: "35 سنة",
      text: "عمري 35 عندي سرعة القذف من قبل العرس و كنت نستعمل قبل في المنشطات  و توا كي خذيت Urinexa وليت نطول في علاقتي و حسنلي أكثر في عملية الانتصاب يعطيكم الصحة",
      rating: 5,
    },
    {
      name: "مسعود بوغانمي من قابس",
      age: "43 سنة",
      text: "إستعملت المنتوج متاعكم لحقيقة ساعدني شوي في مشاكل البروستات وإنشاء الله نزيد نتحسن أكثر",
      rating: 5,
    },
    {
      name: "محرز العمدوني",
      age: "49 سنة",
      text: "لحقيقة المنتوج فعال حسنلي قدرتي الجنسية بالرغم إلي أنا نتكيف برشا .",
      rating: 5,
    },
    {
      name: "عادل قاسمي من المحمدية",
      age: "65 سنة",
      text: "عمري 65 كنت متقلق من حكاية ضعف الانتصاب و ولاتلي مشاكل مع مرتي وصلنا للطلاق، 4 سنين و انا كل مرة نستعمل منتوج و لقيت نتيجة كان ب Urinexa..  كثر خيركم و ربي يباركلكم",
      rating: 5,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 

  return (
    <div id="rev" className="py-16 bg-white " dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          تجارب العملاء
        </h2>
        <div className="slider-container ">
          <Slider
            {...settings}
            className="gap-4" // يمكن إضافة خاصية gap إذا كانت الحاوية تستخدم flexbox
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg mx-5" // margin بين العناصر
              >
                <div className="flex flex-row-reverse mb-4">
                  <UserCircle2 className="h-12 w-12 text-[#137131] ml-4" />
                  <div dir="rtl">
                    <p className="font-semibold text-gray-900" dir="rtl">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p dir="rtl" className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
