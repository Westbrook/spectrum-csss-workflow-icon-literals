import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextBold = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Bold',
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
      aria-labelledby="${`title-TextBold-${count}`}"
      aria-describedby="${`title-TextBold-${count}`}"
    >
      <title id="${`title-TextBold-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextBold-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 6H8a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h8v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1h-3V10h8v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  `;
};
