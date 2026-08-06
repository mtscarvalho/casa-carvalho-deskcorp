"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";

import { cn } from "@/lib/utils";
import "swiper/css";
import { Noise } from "../Noise";
import { Button } from "../ui/button";

type SlideItem = {
  tab: string;
  title: string;
  image: string;
};

const slides: SlideItem[] = [
  {
    tab: "Gestoras de fundos",
    title: "Operações com sistemas financeiros críticos integrados",
    image: "/assets/pagina-inicial/verticais-gestoras-de-fundos.avif",
  },
  {
    tab: "Operações",
    title: "Instituições de pagamento",
    image: "/assets/pagina-inicial/verticais-operacoes.avif",
  },
  {
    tab: "Bancos",
    title: "Bancos em modernização tecnológica",
    image: "/assets/pagina-inicial/verticais-bancos.avif",
  },
  {
    tab: "Fintechs",
    title: "Fintechs em fase de escala",
    image: "/assets/pagina-inicial/verticais-fintechs.avif",
  },
  {
    tab: "Instituições",
    title: "Gestoras e administradoras de fundos de investimentos",
    image: "/assets/pagina-inicial/verticais-instituicoes.avif",
  },
];

export function CasesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      swiper?.slideTo(index);
    },
    [swiper],
  );

  return (
    <div className="bg-secondary overflow-hidden">
      <div className="mx-auto mt-10 flex max-w-fit items-center max-lg:hidden">
        <div aria-label="Categorias do carrossel" className="bg-neutral-0/40 flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full p-1.5 shadow-[0_1px_0_rgba(255,255,255,0.4)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
          {slides.map((slide, index) => {
            const selected = activeIndex === index;
            return (
              <Button variant={selected ? "accent" : "ghost"} aria-controls={`finance-slide-${index}`} aria-selected={selected} key={slide.tab} onClick={() => goToSlide(index)} role="tab" type="button">
                {slide.tab}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <Swiper
          a11y={{ enabled: true }}
          breakpoints={{
            960: { spaceBetween: 16, slidesPerView: 1.5 },
            1024: { spaceBetween: 38 },
          }}
          centeredSlides
          grabCursor
          initialSlide={0}
          keyboard={{ enabled: true }}
          rewind
          modules={[A11y, Keyboard]}
          onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
          onSwiper={setSwiper}
          slidesPerView={1.2}
          spaceBetween={16}
          speed={650}
        >
          {slides.map((slide, index) => {
            const selected = activeIndex === index;

            return (
              <SwiperSlide id={`finance-slide-${index}`} key={slide.tab} role="tabpanel">
                <article className="group relative z-0 mx-auto aspect-square w-full overflow-hidden rounded-[12px] bg-[#272727] md:aspect-video">
                  <Image alt="" className="size-full object-cover" fill priority={index === 0} src={slide.image} />
                  <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-neutral-950"></div>
                  <div className={cn("absolute bottom-0 flex w-full gap-4 p-6 transition-opacity duration-300 max-md:flex-col md:items-end md:justify-between md:p-8", selected ? "opacity-100" : "opacity-0")}>
                    <h2 className="text-on-primary heading-xs md:heading-sm py-1 text-balance">{slide.title}</h2>
                    <Button className="max-md:hidden" variant="accent">
                      Fale com um especialista
                    </Button>
                  </div>
                  <Noise className="absolute inset-0 -z-10" patternSize={150} patternScaleX={1} patternScaleY={1} patternRefreshInterval={100} patternAlpha={10} />
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* <div className="mt-10 flex justify-center gap-2 px-4">
        <Button size="icon" aria-label="Slide anterior" onClick={() => swiper?.slidePrev()} type="button">
          <ArrowLeft />
        </Button>
        <Button size="icon" aria-label="Próximo slide" onClick={() => swiper?.slideNext()} type="button">
          <ArrowRight />
        </Button>
      </div> */}
    </div>
  );
}
