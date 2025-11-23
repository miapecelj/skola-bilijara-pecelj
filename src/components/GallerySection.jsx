import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../images/galerija.jpeg";
import img2 from "../images/galerija2.jpeg";
import img3 from "../images/galerija3.jpeg";
import img4 from "../images/galerija.jpeg";
import img5 from "../images/galerija2.jpeg";
import img6 from "../images/galerija3.jpeg";
import img7 from "../images/galerija.jpeg";
import img8 from "../images/galerija2.jpeg";

export default function GallerySection() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const videos = [
    "https://www.youtube.com/embed/mnOhAhZpioE",
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-zinc-950 border-t border-zinc-800 text-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Naslov */}
        <h2 className="text-4xl font-bold text-center text-emerald-400 mb-10">
          Galerija i treninzi
        </h2>

        {/* 🖼️ Slider sa slikama */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="rounded-2xl"
          onInit={() => {
            const arrows = document.querySelectorAll(
              ".swiper-button-prev, .swiper-button-next"
            );
            arrows.forEach((arrow) => {
              arrow.style.color = "#22c55e"; // emerald-500
              arrow.style.transition = "all 0.3s ease";
            });
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl border border-zinc-800 hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={img}
                  alt={`Trening ${index + 1}`}
                  className="object-cover w-full h-64"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🎥 Veći YouTube snimci ispod */}
        <div className="mt-20 flex flex-col gap-12">
          {videos.map((url, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-zinc-800 shadow-xl hover:shadow-emerald-400/20 transition-all duration-500"
            >
              <div className="aspect-[16/8] bg-black">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={`${url}?rel=0&showinfo=0`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
