import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextParagraph = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Paragraph',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="${height}"
      viewBox="0 0 48 48"
      width="${width}"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-TextParagraph-${count}`}"
      aria-describedby="${`title-TextParagraph-${count}`}"
    >
      <title id="${`title-TextParagraph-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextParagraph-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.412 4A12.275 12.275 0 006.1 14.427 12.011 12.011 0 0018 28c1.4 0 4-.1 4-.1V43a1 1 0 001 1h2a1 1 0 001-1V8h8v35a1 1 0 001 1h2a1 1 0 001-1V6a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  `;
};
