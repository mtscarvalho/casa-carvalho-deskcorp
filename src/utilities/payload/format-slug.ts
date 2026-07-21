import { FieldHook } from "payload";

import { slugify } from "@/utilities/slugify";

export const formatSlug = (): FieldHook => {
  return ({ data, originalDoc }) => {
    const source = data?.slug || data?.title || data?.name || originalDoc?.slug;
    return source ? slugify(source) : undefined;
  };
};
