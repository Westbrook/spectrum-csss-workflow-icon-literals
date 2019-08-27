import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlignCenter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Center',
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
      aria-labelledby="${`title-AlignCenter-${count}`}"
      aria-describedby="${`title-AlignCenter-${count}`}"
    >
      <title id="${`title-AlignCenter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlignCenter-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22 3v5h-6a2 2 0 00-2 2v8a2 2 0 002 2h6v8H8a2 2 0 00-2 2v8a2 2 0 002 2h14v5a1 1 0 001 1h2a1 1 0 001-1v-5h14a2 2 0 002-2v-8a2 2 0 00-2-2H26v-8h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6V3a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
