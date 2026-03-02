import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import teamslider from "../assets/img/teamslider.jpg"

export default function ImageSlider() {
  return (
    <div className="w-full mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true  } }
        autoplay={{ delay: 4000 }}
        breakpoints={{
         768: {
        slidesPerView: 2,  // Tablet
        },
        1024: {
        slidesPerView: 3,  // Desktop
        },
         }}
        className="bg-white "
        
      >
        <SwiperSlide>
          <img
            src={teamslider}
            alt="slide 1"
            className="w-full   object-cover "
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={teamslider}
            alt="slide 2"
            className="w-full  object-cover "
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={teamslider}
            alt="slide 3"
            className="w-full  object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={teamslider}
            alt="slide 3"
            className="w-full  object-cover "
          />
        </SwiperSlide>

        <SwiperSlide className="text-red-600">
          <img
            src={teamslider}
            alt="slide 3"
            className="w-full  object-cover "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}