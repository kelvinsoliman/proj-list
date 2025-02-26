import { useState, useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

const CommunityProjects = () => {
  const [openMonth, setOpenMonth] = useState("February 2025");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("February");

  // Nested data structure for images
  const imagesData = {
    2025: {
      February: [
        { img: "/img1.jpg", text: "Project A - Feb 2025" },
        { img: "/img2.jpg", text: "Project B - Feb 2025" },
        { img: "/img2.jpg", text: "Project B - Feb 2025" },
        { img: "/img2.jpg", text: "Project B - Feb 2025" },
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
      ],
      January: [
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
      ],
      March: [
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
        { img: "/img3.jpeg", text: "Project C - Jan 2025" },
        { img: "/animalbite.jpg", text: "Project D - Jan 2025" },
      ],
    },
    2024: {
      December: [
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
      ],
      November: [
        { img: "/img3.jpeg", text: "Project C - Nov 2024" },
        { img: "/animalbite.jpg", text: "Project D - Nov 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
      ],
      August: [
        { img: "/img3.jpeg", text: "Project C - Nov 2024" },
        { img: "/animalbite.jpg", text: "Project D - Nov 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
        { img: "/img1.jpg", text: "Project A - Dec 2024" },
        { img: "/img2.jpg", text: "Project B - Dec 2024" },
      ],
    },
  };

  // Get the list of years and months dynamically
  const years = Object.keys(imagesData);
  const months = Object.keys(imagesData[selectedYear] || {});

  // Get the slides for the selected year and month
  const slides = imagesData[selectedYear]?.[selectedMonth] || [];

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
  }, [slides]); // Reinitialize Swiper when slides change

  // Prevent form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="text-gray-700 body-font mt-10 px-4 sm:px-10 relative py-20">
      <h1 className="text-center text-2xl md:text-4xl sm:text-3xl font-bold text-blue-600 mb-10 sm:mb-20">
        From Vision to Reality
      </h1>
      <div className="mb-10">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col md:flex-row gap-2"
        >
          {/* Year Dropdown */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-gray-300 border-4 border-amber-200 p-3 rounded-lg"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Month Dropdown */}
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-gray-300 border-4 border-amber-200 p-3 rounded-lg"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="space-y-4">
        {months.map((month) => (
          <div
            key={month}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenMonth(openMonth === month ? null : month)}
              className="w-full flex justify-between items-center bg-gray-100 px-6 py-3 text-gray-700 font-bold"
            >
              {`${month} ${selectedYear}`}
              <span>{openMonth === month ? "▲" : "▼"}</span>
            </button>

            {openMonth === month && (
              <div className="p-6 bg-white">
                <>
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className="swiper-slide rounded-lg p-4"
                        >
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
                    <h3 className="font-bold text-md sm:text-lg">
                      Community Project
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
