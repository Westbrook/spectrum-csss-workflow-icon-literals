import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ClassicGridView = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Classic Grid View',
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
      aria-labelledby="${`title-ClassicGridView-${count}`}"
      aria-describedby="${`title-ClassicGridView-${count}`}"
    >
      <title id="${`title-ClassicGridView-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ClassicGridView-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="18" rx="2" ry="2" width="18" x="4" y="4" />
      <rect height="18" rx="2" ry="2" width="18" x="26" y="4" />
      <rect height="18" rx="2" ry="2" width="18" x="4" y="26" />
      <rect height="18" rx="2" ry="2" width="18" x="26" y="26" />
    </svg>
  `;
};
