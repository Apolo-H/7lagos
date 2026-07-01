import { useRef, useEffect, useState } from "react";
import style from "./header.module.css";
import Logo from "../../assets/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksContainerRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!linksContainerRef.current || !headerRef.current) {
      return;
    }

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "70% top",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3, // Suaviza a barra
        },
      });

      tl.to(headerRef.current, {
        backgroundColor: "#1a2e1a",
        borderBottom: "1px solid rgba(201, 147, 42, 0.15)",
        paddingTop: "1.2rem",
        paddingBottom: "1.2rem",
        duration: 0.4,
      });

      const links = linksContainerRef.current?.querySelectorAll("a");
      if (links && links.length > 0) {
        tl.to(
          links,
          {
            color: "#fefcf7",
            duration: 0.3,
          },
          0,
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${style.header} ${isMenuOpen ? style.menuOpen : ""}`}
    >
      <div
        ref={progressBarRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          width: "100%",
          backgroundColor: "#D4AF37", // Dourado luxuoso
          zIndex: 9999,
          transformOrigin: "0% 50%",
          transform: "scaleX(0)",
        }}
      />

      <div className={style.headerContent}>
        <div className={style.headerLogo}>
          <div className={style.logoContainer}>
            <img src={Logo} alt="Logo do Hotel Sete Lagos" />
          </div>
        </div>

        <nav className={style.headerLinks}>
          <ul ref={linksContainerRef}>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Hotel
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Acomodações
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Refeições
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Diversão
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Day Use e Eventos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Ranchos
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={style.headerHamburgue}
          onClick={toggleMenu}
          aria-label="Abrir Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
