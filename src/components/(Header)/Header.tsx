import { useRef, useEffect } from "react";
import style from "./index.module.css";
import Logo from "../../assets/logo.png";
import LogoVerde from "../../assets/logoVerde.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const logoIniciaRef = useRef<HTMLImageElement | null>(null);
  const logoScrolRef = useRef<HTMLImageElement | null>(null);
  const linksContainerRef = useRef<HTMLUListElement | null>(null); 

  useEffect(() => {
    if (!logoIniciaRef.current || !logoScrolRef.current || !linksContainerRef.current) {
      return;
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "center top",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(
        logoIniciaRef.current,
        {
          transformOrigin: "center center",
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        },
        0
      );

      const links = linksContainerRef.current?.querySelectorAll("a");
      if (links && links.length > 0) {
        tl.to(
          links,
          {
            color: "#47604A",
            duration: 0.4,
          },
          0
        );
      }

      tl.to(
        logoScrolRef.current,
        {
          display: "block",
          transformOrigin: "center center",
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className={style.header}>
      <div className={style.headerLogo}>
        <img src={Logo} ref={logoIniciaRef} alt="Logo do Hotel Sete Lagos" />
        <a href="#">
          <img
            src={LogoVerde}
            ref={logoScrolRef}
            style={{ opacity: 0, transform: "scale(0)", display: "none" }}
            alt="Logo do Hotel Sete Lagos maior"
          />
        </a>
      </div>

      <div className={style.headerLinks}>
        <ul ref={linksContainerRef}>
          <li><a href="">Home</a></li>
          <li><a href="">Hotel</a></li>
          <li><a href="">Acomodações</a></li>
          <li><a href="">Refeições</a></li>
          <li><a href="">Diversão</a></li>
          <li><a href="">Day Use e Eventos</a></li>
          <li><a href="">Ranchos</a></li>
        </ul>
      </div>
    </header>
  );
}