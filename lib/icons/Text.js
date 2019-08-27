import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Text = ({ width = 24, height = 24, hidden = false, title = 'Text', desc } = {}) => {
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
      aria-labelledby="${`title-Text-${count}`}"
      aria-describedby="${`title-Text-${count}`}"
    >
      <title id="${`title-Text-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Text-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 6H8a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1h-3V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2z"
        fill="currentColor"
      />
    </svg>
  `;
};
