import { ComponentPropsWithoutRef } from "react";

type ArrowProps = ComponentPropsWithoutRef<"a">;

export function ArrowRightButton({ className, children, ...props }: ArrowProps) {
  return (
    <svg className="w-16" viewBox="0 0 81 16" fill="none">
      <path d="M0 8H73" stroke="currentColor" strokeWidth="2" className="origin-left transition-transform duration-300 group-hover:scale-x-75" />
      <path d="M73 1L80 8L73 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-[6px] transition-transform duration-300 group-hover:-translate-x-[24px]" />
    </svg>
  );
}
