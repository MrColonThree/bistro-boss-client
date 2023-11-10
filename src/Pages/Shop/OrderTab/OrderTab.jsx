import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FoodCard from "../../../Components/FoodCard/FoodCard";
const OrderTab = ({ items }) => {
  const cardsPerPage = 6;
  const totalSlides = Math.ceil(items.length / cardsPerPage);
  const slides = Array.from({ length: totalSlides }, (_, index) => index);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1} </span>`;
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
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
      </Swiper>
    </div>
  );
};

export default OrderTab;
