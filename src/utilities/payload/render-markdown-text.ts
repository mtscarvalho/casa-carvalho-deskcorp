export const renderMarkdownText = (value: string): string => {
  const escapedValue = value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");

  return escapedValue.replace(/\*\*([\s\S]+?)\*\*/g, '<strong class="bolder">$1</strong>');
};
