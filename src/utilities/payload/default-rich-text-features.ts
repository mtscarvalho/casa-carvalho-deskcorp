import { BoldFeature, FixedToolbarFeature, IndentFeature, ItalicFeature, LinkFeature, LinkFields, OrderedListFeature, ParagraphFeature, UnorderedListFeature } from "@payloadcms/richtext-lexical";
import { TextFieldSingleValidation } from "payload";

export const defaultRichTextFeatures = [
  FixedToolbarFeature(),
  ParagraphFeature(),
  BoldFeature(),
  IndentFeature(),
  ItalicFeature(),
  OrderedListFeature(),
  UnorderedListFeature(),
  LinkFeature({
    fields: ({ defaultFields }) => {
      const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
        if ("name" in field && field.name === "url") return false;
        return true;
      });

      return [
        ...defaultFieldsWithoutUrl,
        {
          name: "url",
          type: "text",
          admin: {
            condition: (_data, siblingData) => siblingData?.linkType !== "internal",
          },
          label: ({ t }) => t("fields:enterURL"),
          required: true,
          validate: ((value, options) => {
            if ((options?.siblingData as LinkFields)?.linkType === "internal") {
              return true;
            }
            return value ? true : "URL is required";
          }) as TextFieldSingleValidation,
        },
      ];
    },
  }),
];
