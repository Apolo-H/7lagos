import { useEffect, useRef } from "react";
import style from "./main.module.css";
import CheckIn from "../../components/HeroCheckIn/HeroCheckIn";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

/* ─── Importações de Mídia Estáticas ───────────────────────── */
import heroVideo from "../../assets/florest.mp4";
import imgDeckPool from "../../assets/Foto+Joao+Athaide+(164)-1920w.webp";
import imgMainPool from "../../assets/Foto+Joao+Athaide+(182)-1920w.webp";
import imgQuarto from "../../assets/Foto+Joao+Athaide+(220)-8e7c62af-1920w.webp";
import imgInfinityPool from "../../assets/Foto+JoaÌ-o+AthaiÌ-de+(162)-1920w.webp";
import userAvatar from "../../assets/user.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ─── Dados de Configuração ───────────────────────────────── */
const ATIVIDADES = [
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/escondeesconde-ed0ef56f-300w.png",
    label: "Esconde-Esconde",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/caminhada-443fa341-300w.png",
    label: "Caminhada",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/trenzinho-53c61667-300w.png",
    label: "Trenzinho",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/skibunda-87645ccc-300w.png",
    label: "Skibunda",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/piscina-fa197750-300w.png",
    label: "Piscina Aquecida",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/pescaria-e262cdb4-300w.png",
    label: "Pescaria",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/passeiocavalo-d9f3c34b-300w.png",
    label: "Passeio a Cavalo",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/passeio-62b4d9ae-300w.png",
    label: "Charrete",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/ordenha-798c524a-300w.png",
    label: "Ordenha Matinal",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/noturno-1f64cb41-300w.png",
    label: "Eventos Noturnos",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/oficina-02fb5a0b-300w.png",
    label: "Oficinas",
  },
  {
    src: "https://lirp.cdn-website.com/154997e9/dms3rep/multi/opt/gincana-55df7faf-300w.png",
    label: "Gincanas",
  },
];

const REVIEWS = [
  {
    name: "Vanessa Neis",
    date: "Julho 2023",
    text: "Hotel with good structure, hot heated swimming pool, tasty food, junina party on Saturday. Dinner was excellent with lots of animation and attentive staff.",
  },
  {
    name: "Ricardo Silva",
    date: "Setembro 2023",
    text: "Excelente atendimento e contato único com a natureza. Com certeza voltaremos em breve com toda a família.",
  },
  {
    name: "Mariana Costa",
    date: "Outubro 2023",
    text: "Lugar maravilhoso, comida fantástica com gosto de fazenda e uma calmaria sem igual. Nota dez para os funcionários.",
  },
];

function Main() {
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const atividadesBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1 ── Revelação do Hero Content
      const heroChildren = heroContentRef.current?.children;
      if (heroChildren) {
        gsap.from(heroChildren, {
          opacity: 0,
          y: 60,
          duration: 1.1,
          stagger: 0.14,
          ease: "power4.out",
          delay: 0.2,
        });
      }

      // 2 ── Animação do Grid Bento
      const bentoItems = gridRef.current?.querySelectorAll(
        `.${style.bentoItem}`,
      );
      if (bentoItems?.length) {
        bentoItems.forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 56, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              delay: i * 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 72%",
                once: true,
              },
            },
          );
        });
      }

      // 3 ── Intro de texto da seção info
      const infoIntroEl = document.querySelector(`.${style.info_intro}`);
      if (infoIntroEl) {
        gsap.fromTo(
          [...infoIntroEl.children],
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoIntroEl,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      // 4 ── Marca d'água das seções
      document.querySelectorAll(`.${style.sectionNum}`).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -32 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el.closest("section"),
              start: "top 65%",
              once: true,
            },
          },
        );
      });

      // 5 ── Cards de avaliação
      const reviewCards = document.querySelectorAll(`.${style.card}`);
      if (reviewCards.length) {
        gsap.fromTo(
          reviewCards,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.26,
            ease: "power2.out",
            scrollTrigger: {
              trigger: reviewCards[0].closest("section"),
              start: "top 72%",
              once: true,
            },
          },
        );
      }

      // 6 ── Grid de Atividades
      const cardsAtividades = atividadesBoxRef.current?.querySelectorAll(
        `.${style.img_wrap}`,
      );
      if (cardsAtividades?.length) {
        gsap.fromTo(
          cardsAtividades,
          { opacity: 0, y: 32, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.04,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: atividadesBoxRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={style.hero} id="hero">
        <div className={style.heroOverlay} />
        <video
          className={style.heroBackgroundVideo}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div ref={heroContentRef} className={style.heroContent}>
          <p className={style.heroEyebrow}>Hotel Fazenda</p>
          <h1 className={style.heroTitle}>Sete Lagos</h1>
          <p className={style.heroTagline}>
            Luxo, natureza e memórias que duram para sempre.
          </p>
        </div>

        <CheckIn />
      </section>

      {/* ── CONTEÚDO ─────────────────────────────────────── */}
      <div ref={containerRef} className={style.container}>
        {/* ── 01 INFO ──────────────────────────────────── */}
        <section className={style.info}>
          <span className={style.sectionNum} aria-hidden="true">
            01
          </span>
          <div className={style.info_intro}>
            <p className={style.eyebrow}>Por que nos escolher</p>
            <h2>
              A melhor hotelaria da
              <br />
              região, à beira do lago.
            </h2>
            <p>
              Localização privilegiada, atendimento caloroso e infraestrutura
              completa de lazer transformam cada estadia em uma experiência.
            </p>
          </div>

          <div className={style.info_imgs}>
            <div ref={gridRef} className={style.info_imgGrid}>
              <div className={`${style.bentoItem} ${style.itemSmall}`}>
                <img src={imgDeckPool} alt="Deck com piscina" />
                <div className={style.bentoOverlay}>
                  <h3>Vista Privativa</h3>
                </div>
              </div>
              <div className={`${style.bentoItem} ${style.itemLarge}`}>
                <img src={imgMainPool} alt="Piscina principal" />
                <div className={style.bentoOverlay}>
                  <h3>Lazer Completo</h3>
                </div>
              </div>
              <div className={`${style.bentoItem} ${style.itemSquare}`}>
                <img src={imgQuarto} alt="Suíte luxo" />
                <div className={style.bentoOverlay}>
                  <h3>Suítes de Luxo</h3>
                </div>
              </div>
              <div className={`${style.bentoItem} ${style.itemWide}`}>
                <img src={imgInfinityPool} alt="Piscina de borda infinita" />
                <div className={style.bentoOverlay}>
                  <h3>Borda Infinita</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 AVALIAÇÕES ────────────────────────────── */}
        <section className={style.avaliations}>
          <span className={style.sectionNum} aria-hidden="true">
            02
          </span>
          <div className={style.avaliationContent}>
            <p className={style.eyebrow}>O que dizem nossos hóspedes</p>
            <h2>
              Experiências
              <br />
              que falam por si.
            </h2>
            <blockquote className={style.featuredQuote}>
              "Ficamos todos admirados com o hotel fazenda desde o momento que
              fizemos o check in! Todos muito solícitos e preocupados com o
              nosso bem estar."
            </blockquote>
            <cite className={style.authorHighlight}>André — Booking.com</cite>
          </div>

          <div className={style.avaliationCards}>
            {REVIEWS.map((r) => (
              <div key={r.name} className={style.card}>
                <div className={style.cardStars}>★★★★★</div>
                <p className={style.cardText}>"{r.text}"</p>
                <div className={style.cardFooter}>
                  <div className={style.userimg}>
                    <img src={userAvatar} alt={r.name} />
                  </div>
                  <div>
                    <h3>{r.name}</h3>
                    <span className={style.cardDate}>{r.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 ATIVIDADES ────────────────────────────── */}
        <section className={style.atividades}>
          <span className={style.sectionNum} aria-hidden="true">
            03
          </span>
          <div className={style.atividadesContent}>
            <p className={style.eyebrow}>Para toda a família</p>
            <h2>
              Atividades que criam
              <br />
              memórias reais.
            </h2>
            <div ref={atividadesBoxRef} className={style.atividadesBox}>
              {ATIVIDADES.map((a) => (
                <div key={a.label} className={style.img_wrap}>
                  <img src={a.src} alt={a.label} />
                  <span className={style.atividadeLabel}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 SLOGAN ────────────────────────────── */}
        <section className={style.slogan}>
          <span className={style.sectionNum} aria-hidden="true">
            04
          </span>
          <div className={style.sloganContent}>
            <div className={style.sloganTitle}>
              <h2>
                Sua família é a <span>Nossa família</span>
              </h2>
            </div>
            <div className={style.sloganText}>
              <p className={style.sloganSubTitle}>
                Descubra o Hotel 7 Lagos, uma autêntica fazenda aos pés da Serra
                da Mantiqueira, onde a simplicidade e o acolhimento são a
                essência.
              </p>
            </div>
          </div>
        </section>

        {/* ── 05 RANCHO ────────────────────────────── */}
        <section className={style.rancho}>
          <span className={style.sectionNum} aria-hidden="true">
            05
          </span>

          <div className={style.ranchoContent}>
            <div className={style.ranchoTitle}>
              <h2>CONHEÇA NOSSO RANCHO!</h2>
            </div>
            <div className={style.ranchoSubTitle}>
              <p>
                Aproveite a natureza em um passeio a cavalo revigorante em
                família!
              </p>
            </div>
          </div>
          <div className={style.ranchoCarouselContainer}>
            <Carousel />
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
