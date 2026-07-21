import { Media } from "@/payload-types";
import { isMediaObject } from "@/utilities/payload/is-media-object";
import Image from "next/image";

type PayloadImageProps = {
  className?: string;
  alt?: string;
  image: Media;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
};

export function PayloadImage({ image, alt, className, width, height, loading = "lazy" }: PayloadImageProps) {
  if (!isMediaObject(image)) {
    return null;
  }

  return <Image key={image.id} className={className} src={image.url!} width={width ? width : image.width!} height={height ? height : image.height!} alt={alt ? alt : image.alt! || "..."} placeholder={image.blurhash ? "blur" : "empty"} blurDataURL={image.blurhash || undefined} loading={loading} />;
}
