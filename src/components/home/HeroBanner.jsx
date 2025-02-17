import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { bannerLists } from "../../utils";

const HeroBanner = () => {
  return (
    <div className="w-full overflow-hidden shadow-lg rounded-lg">
      <Swiper
        grabCursor={true} // Enables smooth cursor effect
        loop={true} // Enables infinite circular looping
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }} // Clickable pagination
        effect="fade"
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        className="w-full"
      >
        {bannerLists.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={`flex flex-col md:flex-row items-center ${banner.bgColor} text-white h-[400px] md:h-[500px] p-8`}
            >
              {/* Text Section */}
              <div className="flex-1 text-left md:px-12">
                <h2 className="text-2xl md:text-5xl font-bold">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-2xl font-medium opacity-80 mt-2">
                  {banner.subtitle}
                </p>
                <p className="text-sm md:text-lg opacity-70 mt-4">
                  {banner.description}
                </p>
                <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all duration-300">
                  Explore Now
                </button>
              </div>
              {/* Image Section */}
              <div className="flex-1 flex justify-center">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full max-w-[450px] md:max-w-[550px] object-cover rounded-lg "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
