import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoreCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Circle',
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
      aria-labelledby="${`title-MoreCircle-${count}`}"
      aria-describedby="${`title-MoreCircle-${count}`}"
    >
      <title id="${`title-MoreCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoreCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4a20 20 0 1020 20A20 20 0 0024 4zM12.775 28.239A4.239 4.239 0 1117.014 24a4.239 4.239 0 01-4.239 4.239zm11.225 0A4.239 4.239 0 1128.238 24 4.239 4.239 0 0124 28.239zm11.028 0A4.239 4.239 0 1139.266 24a4.239 4.239 0 01-4.238 4.239z"
        fill="currentColor"
      />
    </svg>
  `;
};
