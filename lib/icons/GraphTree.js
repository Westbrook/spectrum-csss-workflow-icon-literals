import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphTree = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Tree',
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
      aria-labelledby="${`title-GraphTree-${count}`}"
      aria-describedby="${`title-GraphTree-${count}`}"
    >
      <title id="${`title-GraphTree-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphTree-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="22" rx=".953" ry=".953" width="20" x="4" y="12" />
      <rect height="12" rx=".961" ry=".961" width="16" x="28" y="12" />
      <rect height="6" rx=".828" ry=".828" width="8" x="28" y="28" />
      <rect height="6" rx=".926" ry=".926" width="4" x="40" y="28" />
    </svg>
  `;
};
