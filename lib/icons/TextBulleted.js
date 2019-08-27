import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextBulleted = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Bulleted',
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
      aria-labelledby="${`title-TextBulleted-${count}`}"
      aria-describedby="${`title-TextBulleted-${count}`}"
    >
      <title id="${`title-TextBulleted-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextBulleted-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="28" x="16" y="8" />
      <rect height="4" rx="1" ry="1" width="28" x="16" y="24" />
      <rect height="4" rx="1" ry="1" width="28" x="16" y="40" />
      <circle cx="8" cy="8" r="4" />
      <circle cx="8" cy="24" r="4" />
      <circle cx="8" cy="40" r="4" />
    </svg>
  `;
};
