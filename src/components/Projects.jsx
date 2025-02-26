import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      new Swiper(".mySwiper", {
        slidesPerView: 1, // Default for small screens
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.8, // Scale down non-centered slides
        },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 30 }, // Medium screens
          1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
        },
      });
    }, 100);
  }, []);

  const slides = [
    { img: "/img1.jpg", text: "Project A" },
    { img: "/img2.jpg", text: "Project B" },
    { img: "/img3.jpeg", text: "Project C" },
    { img: "/animalbite.jpg", text: "Project D" },
  ];

  return (
    <section className="text-gray-700 body-font mt-10 px-4 sm:px-10 relative py-20">
      {/* Date Heading */}
      <div className="relative flex justify-center">
        <h2 className="absolute -top-6 left-0 text-blue-600 font-bold text-sm sm:text-base">
          February 2025
        </h2>
      </div>

      {/* Swiper */}
      <div className="swiper mySwiper" data-aos="fade-right">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide rounded-lg p-4">
              <img
                src={slide.img}
                className="object-cover rounded-lg shadow-md h-[150px] sm:h-[200px] w-full sm:w-[400px] swiper-slide-image"
                alt={slide.text}
              />
            </div>
          ))}
        </div>
        {/* <div className="swiper-pagination"></div> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* Ribbon Cutting Div */}
      <div
        className="absolute z-[999] right-4 sm:right-10 md:top-1/4 bg-[#FFF9F9] h-[150px] sm:h-[200px] w-[250px] sm:w-[300px] shadow-lg p-4 sm:p-6 rounded-lg"
        data-aos="fade-left"
      >
        <h3 className="font-bold text-md sm:text-lg">Ribbon Cutting</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export default Projects;
