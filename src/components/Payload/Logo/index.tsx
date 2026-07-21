import { cn } from "@/lib/utils";
import { Logo, Media } from "@/payload-types";
import { isMediaObject } from "@/utilities/payload/is-media-object";
import Image from "next/image";

type PayloadImageProps = {
  className?: string;
  theme?: "light" | "dark";
  logo: Logo;
};

export function PayloadLogo({ className, logo, theme = "dark" }: PayloadImageProps) {
  if (!isMediaObject(logo.image)) {
    return null;
  }

  return <Image key={logo.id} className={cn("w-auto dark:invert-100", className, theme == "light" && "invert-100")} src={(logo.image as Media).url!} width={logo.image.width!} height={logo.image.height!} alt={logo.title} loading="lazy" />;
}
