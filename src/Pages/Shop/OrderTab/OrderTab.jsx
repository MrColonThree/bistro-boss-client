import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { useState } from "react";

const OrderTab = ({ items }) => {
  const cardsPerPage = 6;
  const totalSlides = Math.ceil(items.length / cardsPerPage);
  const slides = Array.from({ length: totalSlides }, (_, index) => index);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePaginationClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <Swiper
        className="mySwiper"
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance);
        }}
        onSlideChange={(swiperInstance) => {
          setActiveIndex(swiperInstance.activeIndex);
        }}
      >
        {slides.map((slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
              {items
                .slice(
                  slideIndex * cardsPerPage,
                  (slideIndex + 1) * cardsPerPage
                )
                .map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center mt-4">
          {slides.map((slideIndex) => (
            <button
              key={slideIndex}
              className={`cursor-pointer text-lg border border-black font-bold rounded-full mx-2 py-1 px-3 ${
                activeIndex === slideIndex ? "bg-yellow-600" : "bg-slate-200"
              }`}
              onClick={() => handlePaginationClick(slideIndex)}
            >
              {slideIndex + 1}
            </button>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default OrderTab;
