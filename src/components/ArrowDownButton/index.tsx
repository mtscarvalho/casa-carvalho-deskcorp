import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type ArrowProps = ComponentPropsWithoutRef<"a"> & {
  align?: "left" | "center";
  textPosition?: "left" | "right";
};

export function ArrowDownButton({ align = "center", textPosition = "right", className, children, ...props }: ArrowProps) {
  const arrow = (
    <svg className="group-focus-visible:focused h-18 w-4 shrink-0" viewBox="0 0 16 81" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 0V73" stroke="currentColor" strokeWidth="2" className="origin-top transition-transform duration-300 group-hover:scale-y-75" />
      <path d="M1 73L8 80L15 73" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="-translate-y-[6px] transition-transform duration-300 group-hover:-translate-y-[24px]" />
    </svg>
  );

  const text = (
    <span className={cn("grid", textPosition === "left" && "justify-end")}>
      <span className={cn("w-full max-w-[12ch] shrink-0 py-2 text-xs text-balance underline", textPosition === "left" && "text-right")}>{children}</span>
    </span>
  );

  return (
    <a className={cn("group grid max-w-max gap-2 focus-visible:outline-none", align === "center" ? "grid-cols-[14ch_auto_14ch]" : textPosition === "left" ? "grid-cols-[14ch_auto]" : "grid-cols-[auto_14ch]", className)} {...props}>
      {align === "center" && textPosition === "right" && <div />}
      {textPosition === "left" && text}
      {arrow}
      {textPosition === "right" && text}
      {align === "center" && textPosition === "left" && <div />}
    </a>
  );
}
