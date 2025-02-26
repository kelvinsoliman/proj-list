import { useState, useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

const CommunityProjects = () => {
  const [openMonth, setOpenMonth] = useState("February 2025");

  useEffect(() => {
    const preloadImages = () => {
      return Promise.all(
        slides.map((slide) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = slide.img;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    preloadImages().then(() => {
      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
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
          scale: 0.8,
        },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        },
      });

      // Initialize AOS after Swiper is ready
      setTimeout(() => {
        AOS.init({ duration: 1000, once: true });
      }, 500);
    });
  }, []);

  const months = [
    "February 2025",
    "January 2025",
    "December 2024",
    "November 2024",
    "October 2024",
    "September 2024",
    "August 2024",
  ];

  const slides = [
    { img: "/img1.jpg", text: "Project A" },
    { img: "/img2.jpg", text: "Project B" },
    { img: "/img3.jpeg", text: "Project C" },
    { img: "/animalbite.jpg", text: "Project D" },
  ];

  return (
    <section className="text-gray-700 body-font mt-10 px-4 sm:px-10 relative py-20">
      <h1 className="text-center text-2xl md:text-4xl sm:text-3xl font-bold text-blue-600 mb-10 sm:mb-20">
        From Vision to Reality
      </h1>
      <div className="mb-10 ">
        <form action="" className="flex flex-col md:flex-row gap-1">
          <input type="text" className="bg-gray-300 border-4 border-amber-200 p-3" placeholder="month"/>
          <input type="text" className="bg-gray-300 border-4 border-amber-200 p-3" placeholder="year"/>
          <input type="text" className="bg-gray-300 border-4 border-amber-200 p-3" placeholder="description"/>
        </form>
      </div>
      <div className="space-y-4">
        {months.map((month) => (
          <div key={month} className="border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenMonth(openMonth === month ? null : month)}
              className="w-full flex justify-between items-center bg-gray-100 px-6 py-3 text-gray-700 font-bold"
            >
              {month}
              <span>{openMonth === month ? "▲" : "▼"}</span>
            </button>

            {openMonth === month && (
              <div className="p-6 bg-white">
                <>
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      {slides.map((slide, index) => (
                        <div key={index} className="swiper-slide rounded-lg p-4">
                          <img
                            src={slide.img}
                            className="object-cover rounded-lg shadow-xl h-[150px] sm:h-[200px] w-full sm:w-[400px] swiper-slide-image"
                            alt={slide.text}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                  <div
                    className="bg-[#FFF9F9] shadow-lg p-4 sm:p-6 rounded-lg mt-6"
                    data-aos="fade-right"
                  >
                    <h3 className="font-bold text-md sm:text-lg">Community Project</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityProjects;