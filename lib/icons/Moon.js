import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Moon = ({ width = 24, height = 24, hidden = false, title = 'Moon', desc } = {}) => {
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
      aria-labelledby="${`title-Moon-${count}`}"
      aria-describedby="${`title-Moon-${count}`}"
    >
      <title id="${`title-Moon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Moon-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4a20 20 0 1020 20A20 20 0 0024 4zm1.453 35.934c-.478.043-.963.066-1.453.066a16 16 0 010-32c.49 0 .975.023 1.453.066a26 26 0 000 31.867z"
        fill="currentColor"
      />
    </svg>
  `;
};
