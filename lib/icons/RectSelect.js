import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RectSelect = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rect Select',
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
      aria-labelledby="${`title-RectSelect-${count}`}"
      aria-describedby="${`title-RectSelect-${count}`}"
    >
      <title id="${`title-RectSelect-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RectSelect-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10 38H8v-2H4v4a2 2 0 002 2h4zM4 16h4v6H4zm0 10h4v6H4zm4-16h2V6H6a2 2 0 00-2 2v4h4zm6 28h8v4h-8zm12 0h8v4h-8zm14-12h4v6h-4zm0-10h4v6h-4zm2-10h-4v4h2v2h4V8a2 2 0 00-2-2zm-2 32h-2v4h4a2 2 0 002-2v-4h-4zM14 6h8v4h-8zm12 0h8v4h-8z"
      />
    </svg>
  `;
};
