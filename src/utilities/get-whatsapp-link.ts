export function getWhatsAppLink(message: string = "Olá! Vim pelo site e gostaria de mais informações. Pode me ajudar?", number: number = 5511998369920) {
  const encodedMessage = encodeURIComponent(message || "");
  return `https://wa.me/${number}?text=${encodedMessage}`;
}
