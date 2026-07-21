"use client";

import { cn } from "@/utilities/cn";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  autoplay?: boolean;
  className?: string;
  poster?: string;
};

export function BackgroundVideo({ src, autoplay, poster, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoplay && videoRef.current) {
      videoRef.current.play();
    } else {
      const handleScroll = () => {
        if (videoRef.current) {
          const halfWindow = window.innerHeight;
          const video = videoRef.current;
          const isSectionVisible = video.getBoundingClientRect().bottom - halfWindow < 0;
          if (isSectionVisible) {
            video.play();
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [autoplay]);

  return (
    <video className={cn("absolute inset-0 -z-10 h-full w-full object-cover", className)} poster={poster} ref={videoRef} muted loop playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
}
