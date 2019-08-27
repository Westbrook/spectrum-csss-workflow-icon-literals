import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BracketsSquare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Brackets Square',
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
      aria-labelledby="${`title-BracketsSquare-${count}`}"
      aria-describedby="${`title-BracketsSquare-${count}`}"
    >
      <title id="${`title-BracketsSquare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BracketsSquare-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 5V3a1 1 0 00-1-1h-7a2 2 0 00-2 2v40a2 2 0 002 2h7a1 1 0 001-1v-2a1 1 0 00-1-1h-3V6h3a1 1 0 001-1zm12-2v2a1 1 0 001 1h3v36h-3a1 1 0 00-1 1v2a1 1 0 001 1h7a2 2 0 002-2V4a2 2 0 00-2-2h-7a1 1 0 00-1 1z"
      />
    </svg>
  `;
};
