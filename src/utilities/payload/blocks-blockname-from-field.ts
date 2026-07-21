import type { FieldHook } from "payload";

export const defineBlockNameFromCommonFields = (fieldsInPriority: string[] = ["uppertitle", "title", "name", "internalBlockName"]): FieldHook => {
  return ({ value }) => {
    if (!Array.isArray(value)) return value;

    return value.map((block: any) => {
      const key = fieldsInPriority.find((field) => block?.[field]);

      if (!key) return block;

      const cleanBlockName = String(block[key])
        .replace(/\[\[(left|right):(normal|bold):(.*?)\]\]/g, "$3")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      return {
        ...block,
        blockName: cleanBlockName,
      };
    });
  };
};
