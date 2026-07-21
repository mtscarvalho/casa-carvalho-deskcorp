"use client";

import { cn } from "@/lib/utils";
import { easeOut, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type DisplayTitleProps = {
  size?: "lg" | "sm";
  container?: "xl" | "lg" | "md" | "sm" | "xs";
  left: {
    text: string;
    weight: "normal" | "bold";
  };
  right: {
    text: string;
    weight: "normal" | "bold";
  };
};

const sizeClasses = {
  lg: "text-6xl sm:7xl md:text-8xl",
  sm: "text-4xl sm:text-6xl lg:text-7xl",
};

const weightClasses = {
  normal: "font-extralight",
  bold: "font-times font-bold",
};

const containerClasses = {
  xl: "max-w-4xl",
  lg: "max-w-3xl",
  md: "max-w-2xl",
  sm: "max-w-xl",
  xs: "max-w-sm",
};

export default function DisplayTitle({ size = "lg", container = "lg", left, right }: DisplayTitleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-5vw", "0vw"], { ease: easeOut });
  const rightX = useTransform(scrollYProgress, [0, 1], ["5vw", "0vw"], { ease: easeOut });

  return (
    <div ref={ref} className={cn("mx-auto", containerClasses[container])}>
      <h2 data-heading-entrance="" className={cn("leading-[0.9] -tracking-wider", sizeClasses[size])}>
        <motion.span style={{ x: leftX }} className={cn("ml-auto block text-left", weightClasses[left.weight])}>
          {left.text}
        </motion.span>
        <motion.span style={{ x: rightX }} className={cn("mr-auto block text-right", weightClasses[right.weight])}>
          {right.text}
        </motion.span>
      </h2>
    </div>
  );
}
