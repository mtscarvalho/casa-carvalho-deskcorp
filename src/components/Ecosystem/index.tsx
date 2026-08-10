"use client";

import Image from "next/image";
import { useRef } from "react";

type EcosystemProps = {
  className?: string;
};

type MagneticItemProps = {
  src: string;
  width: string;
  left: string;
  top: string;
  imageWidth: number;
  imageHeight: number;
  strength?: number;
};

function MagneticItem({ src, width, left, top, imageWidth, imageHeight, strength = 12 }: MagneticItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    element.style.transform = `translate(-50%, -50%) translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(-50%, -50%) translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute cursor-pointer transition-transform duration-300 ease-out will-change-transform"
      style={{
        width,
        left,
        top,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image className="h-auto w-full" src={src} alt="" width={imageWidth} height={imageHeight} />
    </div>
  );
}

export default function Ecosystem({ className }: EcosystemProps) {
  return (
    <div className={`relative mx-auto aspect-700/260 size-full max-w-[700px] ${className ?? ""}`}>
      <MagneticItem src="/assets/ecossistema-01.svg" width="20%" left="50%" top="50%" imageWidth={211} imageHeight={211} strength={18} />
      <MagneticItem src="/assets/ecossistema-left-01.svg" width="7%" left="22%" top="9%" imageWidth={47} imageHeight={47} />
      <MagneticItem src="/assets/ecossistema-left-02.svg" width="5%" left="34%" top="40%" imageWidth={35} imageHeight={35} />
      <MagneticItem src="/assets/ecossistema-left-03.svg" width="7%" left="4%" top="55%" imageWidth={50} imageHeight={50} />
      <MagneticItem src="/assets/ecossistema-right-01.svg" width="6%" left="75%" top="28%" imageWidth={39} imageHeight={39} />
      <MagneticItem src="/assets/ecossistema-right-02.svg" width="7%" left="97%" top="46%" imageWidth={51} imageHeight={51} />
      <MagneticItem src="/assets/ecossistema-right-03.svg" width="8%" left="59%" top="73%" imageWidth={61} imageHeight={61} />
    </div>
  );
}
