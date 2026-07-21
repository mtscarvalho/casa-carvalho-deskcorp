export function isValidUrl(value: string | undefined | null): true | string {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return "Por favor, insira uma URL válida.";
    }

    return true;
  } catch {
    return "Por favor, insira uma URL válida.";
  }
}
