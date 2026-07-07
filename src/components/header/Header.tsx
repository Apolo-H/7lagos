import { useRef, useEffect, useState } from "react";
import style from "./header.module.css";
import Logo from "../../assets/logo.png";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const linksContainerRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (
      !linksContainerRef.current ||
      !headerRef.current ||
      !progressBarRef.current
    ) {
      return;
    }
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      const heroElement = document.querySelector("#hero");

      if (heroElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "70% top",
            toggleActions: "play none none reverse",
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
      } else {
        gsap.set(headerRef.current, {
          backgroundColor: "#1a2e1a",
          borderBottom: "1px solid rgba(201, 147, 42, 0.15)",
          paddingTop: "1.2rem",
          paddingBottom: "1.2rem",
        });

        const links = linksContainerRef.current?.querySelectorAll("a");
        if (links && links.length > 0) {
          gsap.set(links, { color: "#fefcf7" });
        }
      }
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      <div
        ref={progressBarRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          width: "100%",
          backgroundColor: "#D4AF37",
          zIndex: 10000,
          transformOrigin: "left center",
          transform: "scaleX(0)",
          pointerEvents: "none",
        }}
      />

      <header
        ref={headerRef}
        className={`${style.header} ${isMenuOpen ? style.menuOpen : ""}`}
      >
        <div className={style.headerContent}>
          <div className={style.headerLogo}>
            <div className={style.logoContainer}>
              <img src={Logo} alt="Logo do Hotel Sete Lagos" />
            </div>
          </div>

          <nav className={style.headerLinks}>
            <ul ref={linksContainerRef}>
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotel" onClick={handleLinkClick}>
                  Hotel
                </Link>
              </li>
              <li>
                <Link to="/acomodacoes" onClick={handleLinkClick}>
                  Acomodações
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className={style.headerHamburgue}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isMenuOpen}
            role="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
