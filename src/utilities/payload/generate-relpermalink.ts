import type { FieldHook } from "payload";

import { slugify } from "@/utilities/slugify";

export type Locale = "pt-br" | "en" | "es";
export type LocalePathMap = Record<Locale, string>;
export type PathParams = Record<string, string | undefined>;

type FieldHookArguments = Parameters<FieldHook>[0];

export type ResolvePathParams = (
  args: FieldHookArguments & {
    locale: Locale;
  },
) => PathParams | Promise<PathParams>;

const isLocale = (locale: unknown): locale is Locale => {
  return locale === "pt-br" || locale === "en" || locale === "es";
};

const getLocalizedString = (value: unknown, locale: Locale): string | undefined => {
  if (typeof value === "string" && value.length > 0) {
    return value;
  }

  if (value && typeof value === "object" && locale in value) {
    const localizedValue = (value as Record<string, unknown>)[locale];

    if (typeof localizedValue === "string" && localizedValue.length > 0) {
      return localizedValue;
    }
  }

  return undefined;
};

const replacePathParams = (path: string, params: PathParams): string | undefined => {
  let resolvedPath = path;

  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;

    resolvedPath = resolvedPath.split(`[${key}]`).join(slugify(value));
  }

  const hasUnresolvedParameters = /\[[^\]]+\]/.test(resolvedPath);

  if (hasUnresolvedParameters) {
    return undefined;
  }

  return resolvedPath;
};

export function generateRelPermalink(paths: LocalePathMap, resolvePathParams?: ResolvePathParams): FieldHook {
  return async (args) => {
    const { data, originalDoc, req, value } = args;

    const locale = isLocale(req.locale) ? req.locale : "pt-br";

    const previousValue = getLocalizedString(value, locale) ?? getLocalizedString(originalDoc?.relPermalink, locale);

    const slug = getLocalizedString(data?.slug, locale) ?? getLocalizedString(originalDoc?.slug, locale);

    if (!slug) {
      return previousValue;
    }

    const pathParams = resolvePathParams
      ? await resolvePathParams({
          ...args,
          locale,
        })
      : {};

    const basePath = replacePathParams(paths[locale], pathParams);

    if (!basePath) {
      return previousValue;
    }

    const normalizedBasePath = basePath.replace(/\/+$/, "");
    const normalizedSlug = slugify(slug);

    return `${normalizedBasePath}/${normalizedSlug}`;
  };
}
