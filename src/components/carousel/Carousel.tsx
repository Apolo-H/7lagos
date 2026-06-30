import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import style from "./carousel.module.css";

import rancho1 from "/rancho(1).webp";
import rancho2 from "/rancho(2).webp";
import rancho3 from "/rancho(3).webp";
import rancho4 from "/rancho(4).webp";
import rancho5 from "/rancho(5).webp";
import rancho6 from "/rancho(6).webp";
import rancho7 from "/rancho(7).webp";
import rancho8 from "/rancho(8).webp";
import rancho9 from "/rancho(9).webp";
import rancho10 from "/rancho(10).webp";

import { Pagination, Autoplay } from "swiper/modules";

const RANCHO_SLIDES = [
  { title: "Passeios Guiados", img: rancho1 },
  { title: "Nossos Cavalos", img: rancho2 },
  { title: "Contato com a Natureza", img: rancho3 },
  { title: "Trilhas e Aventuras", img: rancho4 },
  { title: "Piqueniques ao Ar Livre", img: rancho5 },
  { title: "Eventos e Festas", img: rancho6 },
  { title: "Aulas de Equitação", img: rancho7 },
  { title: "Passeios a Cavalo", img: rancho8 },
  { title: "Observação de Animais", img: rancho9 },
  { title: "Relaxamento e Bem-Estar", img: rancho10 },
];

export default function Carousel() {
  return (
    <div className={style.carouselWrapper}>
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
          bulletActiveClass: style.activeBullet,
        }}
        modules={[Pagination, Autoplay]}
        className={style.mainSwiper}
      >
        {RANCHO_SLIDES.map((slide, index) => (
          <SwiperSlide key={`main-${index}`} className={style.mainSlide}>
            <div className={style.cardImageContainer}>
              <img src={slide.img} alt={slide.title} loading="lazy" />
              <div className={style.slideOverlay} />
            </div>
            <div className={style.slideCaption}>
              <h3>{slide.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
