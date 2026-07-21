"use client";

import { usePathname } from "@/i18n/navigation";
import { Locale, useLocale, useTranslations } from "next-intl";

export function LanguageSelector() {
  const translation = useTranslations("components/LanguageSelector");

  const pathname = usePathname();
  const locale = useLocale();

  const languages: { label: string; locale: Locale }[] = [
    { label: "Português (PT-BR)", locale: "pt-br" },
    { label: "English (EN)", locale: "en" },
    { label: "Spanish (ES)", locale: "es" },
  ];

  const labelFromCurrentLocale = languages.find((language) => language.locale === locale)?.locale || "";

  return (
    <div>
      {/* <Dropdown>
        <Button size="sm" variant="subtle" title={translation("label")} asChild>
          <DropdownTrigger>
            <Languages className="size-4" />
            {labelFromCurrentLocale.toUpperCase()}
          </DropdownTrigger>
        </Button>
        <DropdownContent>
          {languages.map(({ label, locale: langLocale }) => (
            <Button size="sm" variant="subtle" className="block w-full text-left" key={langLocale} asChild aria-current={locale === langLocale ? "true" : undefined}>
              <Link href={pathname} locale={langLocale}>
                {label}
              </Link>
            </Button>
          ))}
        </DropdownContent>
      </Dropdown> */}
    </div>
  );
}
