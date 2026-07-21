import Marquee from "react-fast-marquee";

import type { Logo } from "@/payload-types";
import { PayloadLogo } from "../Payload/Logo";

type LogosMarqueeProps = {
  logos?: Logo[] | null;
  layout?: "simple" | "double";
};

export function LogosMarquee({ logos = [], layout = "simple" }: LogosMarqueeProps) {
  const validLogos = Array.isArray(logos) ? logos : [];

  if (validLogos.length === 0) {
    return null;
  }

  const midpoint = Math.ceil(validLogos.length / 2);
  const firstRow = validLogos.slice(0, midpoint);
  const secondRow = validLogos.slice(midpoint);

  const renderLogos = (items: Logo[]) => items.map((logo) => <PayloadLogo key={logo.id} logo={logo} className="mx-4 h-16 w-auto" />);

  return (
    <div className="space-y-4 overflow-x-hidden">
      {layout === "double" ? (
        <>
          {firstRow.length > 0 && (
            <Marquee direction="right" speed={40}>
              {renderLogos(firstRow)}
              {renderLogos(firstRow)}
            </Marquee>
          )}

          {secondRow.length > 0 && (
            <Marquee direction="left" speed={40}>
              {renderLogos(secondRow)}
              {renderLogos(secondRow)}
            </Marquee>
          )}
        </>
      ) : (
        <Marquee direction="right" speed={40}>
          {renderLogos(validLogos)}
          {renderLogos(validLogos)}
        </Marquee>
      )}
    </div>
  );
}
