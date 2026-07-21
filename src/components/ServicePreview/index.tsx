import Image from "next/image";
import Link from "next/link";

import { Media } from "@/payload-types";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type ServicePreviewProps = {
  index: number;
  title: string;
  description?: string;
  url: string;
  image?: Media;
};

export default function ServicePreview({ index, title, description, url, image }: ServicePreviewProps) {
  const hasImage = image;

  return (
    <li className="group border-primary/15 text-primary relative overflow-hidden border-b md:h-72">
      <div aria-hidden="true" className="bg-inverted-secondary dark:bg-secondary absolute inset-0 hidden translate-y-[calc(100%+2px)] overflow-hidden transition-transform duration-500 ease-out md:block md:group-hover:translate-y-0">
        {hasImage && <Image src={image.url!} alt={title} fill className="object-cover" />}
      </div>

      <div className="relative z-10 container h-full max-w-5xl">
        <div className="md:group-hover:text-inverted-primary dark:group-hover:text-primary grid grid-cols-1 gap-6 py-8 md:h-full md:grid-cols-[auto_2fr_1.25fr_auto] md:items-center md:gap-6 md:py-0 md:transition-colors md:duration-500">
          <span className="font-times text-2xl font-bold">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="min-w-0 text-4xl leading-[0.9] font-extralight -tracking-wide md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-x-5">{title}</h3>
          <p className="md:opacity-0 md:transition-all md:duration-500 md:ease-out md:group-hover:-translate-x-5 md:group-hover:opacity-100">{description}</p>
          <div className="justify-self-end text-current">
            <Button className="duration-500 group-hover:opacity-100 md:opacity-0" variant="ghost">
              <span className="md:sr-only">Mais informações</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <Link className="absolute inset-0 z-20 size-full" href={url} title={`Mais informações sobre ${title}`} />
    </li>
  );
}
