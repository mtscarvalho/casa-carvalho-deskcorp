import type { Locale, ResolvePathParams } from "@/utilities/payload/generate-relpermalink";

type ServiceRelationship =
  | string
  | number
  | {
      id?: string | number;
      slug?: unknown;
    }
  | null
  | undefined;

const getLocalizedSlug = (value: unknown, locale: Locale): string | undefined => {
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

const getRelationshipID = (relationship: ServiceRelationship): string | number | undefined => {
  if (typeof relationship === "string" || typeof relationship === "number") {
    return relationship;
  }

  if (relationship && typeof relationship === "object" && relationship.id !== undefined) {
    return relationship.id;
  }

  return undefined;
};

export const resolveServiceSlug: ResolvePathParams = async ({ data, originalDoc, req, locale }) => {
  const serviceWasChanged = data && Object.prototype.hasOwnProperty.call(data, "service");

  const relationship = (serviceWasChanged ? data?.service : originalDoc?.service) as ServiceRelationship;

  /*
   * Payload may provide an already populated relationship.
   * In that case, no additional query is necessary.
   */
  if (relationship && typeof relationship === "object") {
    const populatedSlug = getLocalizedSlug(relationship.slug, locale);

    if (populatedSlug) {
      return {
        serviceSlug: populatedSlug,
      };
    }
  }

  const serviceID = getRelationshipID(relationship);

  if (serviceID === undefined) {
    return {};
  }

  const service = await req.payload.findByID({
    collection: "services",
    id: serviceID,
    locale,
    fallbackLocale: false,
    draft: true,
    depth: 0,
    req,
  });

  const serviceSlug = getLocalizedSlug(service.slug, locale);

  return {
    serviceSlug,
  };
};
