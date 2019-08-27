import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Line = ({ width = 24, height = 24, hidden = false, title = 'Line', desc } = {}) => {
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
      aria-labelledby="${`title-Line-${count}`}"
      aria-describedby="${`title-Line-${count}`}"
    >
      <title id="${`title-Line-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Line-${count}`}">${desc}</desc>
          `
        : html``}
      <rect
        height="4"
        rx="1"
        ry="1"
        transform="rotate(-45 24 24)"
        width="53.657"
        x="-2.828"
        y="22"
        fill="currentColor"
      />
    </svg>
  `;
};
