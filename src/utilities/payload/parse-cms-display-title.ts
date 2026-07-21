type DisplayTitlePart = {
  text: string;
  weight: "normal" | "bold";
};

type DisplayTitleParsed = {
  left: DisplayTitlePart;
  right: DisplayTitlePart;
};

export function parseCmsDisplayTitle(text = ""): DisplayTitleParsed {
  const regex = /\[\[(left|right):(normal|bold):([^\]]+)\]\]/g;

  const result: DisplayTitleParsed = {
    left: { text: "", weight: "normal" },
    right: { text: "", weight: "normal" },
  };

  for (const match of text.matchAll(regex)) {
    const side = match[1] as "left" | "right";
    const weight = match[2] as "normal" | "bold";
    const content = match[3];

    result[side] = {
      text: content.trim(),
      weight,
    };
  }

  return result;
}
