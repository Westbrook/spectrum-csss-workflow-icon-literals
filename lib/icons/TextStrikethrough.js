import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextStrikethrough = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Strikethrough',
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
      aria-labelledby="${`title-TextStrikethrough-${count}`}"
      aria-describedby="${`title-TextStrikethrough-${count}`}"
    >
      <title id="${`title-TextStrikethrough-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextStrikethrough-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="34" x="6" y="22" />
      <path
        d="M29 38h-3v-8h-6v8h-3a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1zm9-32H8a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v8h6v-8h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
