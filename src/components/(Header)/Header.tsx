import { useRef, useEffect } from "react";
import style from "./index.module.css";
import Logo from "../../assets/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const logoIniciaRef = useRef<HTMLImageElement | null>(null);
  const logoScrolRef = useRef<HTMLImageElement | null>(null);
  const linksContainerRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (
      !logoIniciaRef.current ||
      !logoScrolRef.current ||
      !linksContainerRef.current ||
      !headerRef
    ) {
      return;
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "90% top",
          toggleActions: "play none none reverse",
        },
      });
      const header = headerRef.current;
      tl.to(header, {
        backgroundColor: "#c9932a",
        duration: 0.4,
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
        0,
      );

      const links = linksContainerRef.current?.querySelectorAll("a");
      if (links && links.length > 0) {
        tl.to(
          links,
          {
            color: "#F7F3E8",
            duration: 0.4,
          },
          0,
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
        0,
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className={style.header}>
      <div className={style.headerLogo}>
        <div className={style.logoContainer}>
          <img src={Logo} ref={logoIniciaRef} alt="Logo do Hotel Sete Lagos" />
        </div>
        <div className={style.logoContainerScroll}>
          <a href="#">
            <img
              src={Logo}
              ref={logoScrolRef}
              style={{ opacity: 0, transform: "scale(0)", display: "none" }}
              alt="Logo do Hotel Sete Lagos maior"
            />
          </a>
        </div>
      </div>

      <div className={style.headerLinks}>
        <ul ref={linksContainerRef}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Hotel</a>
          </li>
          <li>
            <a href="">Acomodações</a>
          </li>
          <li>
            <a href="">Refeições</a>
          </li>
          <li>
            <a href="">Diversão</a>
          </li>
          <li>
            <a href="">Day Use e Eventos</a>
          </li>
          <li>
            <a href="">Ranchos</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
