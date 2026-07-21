import type { DefaultServerCellComponentProps } from "payload";

type LocalizedName = Record<string, string | null | undefined>;

export default async function LanguageTitlesCell({ payload, collectionSlug, rowData }: DefaultServerCellComponentProps) {
  if (!rowData?.id) {
    return null;
  }

  const localization = payload.config.localization;

  if (!localization) {
    return <span>Localization disabled</span>;
  }

  const locales = localization.locales.map((locale) => (typeof locale === "string" ? locale : locale.code));

  const service = (await payload.findByID({
    collection: collectionSlug,
    id: rowData.id,
    locale: "all",
    fallbackLocale: false,
    draft: true,
    depth: 0,
    select: {
      name: true,
      title: true,
    },
  })) as unknown as {
    title: any;
    id: number;
    name: LocalizedName;
  };

  return (
    <ul style={{ display: "grid", paddingLeft: 0, minWidth: "260px", maxWidth: "360px" }}>
      {locales.map((locale) => {
        const title = service.title?.[locale]?.trim() || service.name?.[locale]?.trim();

        return (
          <li style={{ display: "flex", gap: 10 }} key={locale}>
            <strong style={{ display: "block", minWidth: 40, textAlign: "right", flexShrink: 0 }}>{locale.toUpperCase()}:</strong>
            <span title={title || undefined} style={{ display: "-webkit-box", minWidth: 0, overflow: "hidden", WebkitBoxOrient: "vertical", WebkitLineClamp: 1 }}>
              {title || <em>N/A</em>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
