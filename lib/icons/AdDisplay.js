import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AdDisplay = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Ad Display',
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
      aria-labelledby="${`title-AdDisplay-${count}`}"
      aria-describedby="${`title-AdDisplay-${count}`}"
    >
      <title id="${`title-AdDisplay-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AdDisplay-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 10h10v18H28z" />
      <path
        d="M44 4H4a2 2 0 00-2 2v26a2 2 0 002 2h14v4a2.006 2.006 0 01-2 2h-3a1 1 0 00-1 1v2a1 1 0 001 1h22a1 1 0 001-1v-2a1 1 0 00-1-1h-3a2.006 2.006 0 01-2-2v-4h14a2 2 0 002-2V6a2 2 0 00-2-2zm-2 26H6V8h36z"
      />
    </svg>
  `;
};
