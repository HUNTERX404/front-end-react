import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import pic1 from "../../../assets/images/Iron-Man.jpeg";
import pic2 from "../../../assets/images/Caption-America.jpeg";
function HomePage() {
  return (
    <header className="h-dvh p-4 px-5 sm:py-3">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="h-full">
          <img className="h-full w-full object-cover" src={pic1} />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img className="h-full w-full object-cover" src={pic2} />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img className="h-full w-full object-cover" src={pic1} />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img className="h-full w-full object-cover" src={pic1} />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default HomePage;
