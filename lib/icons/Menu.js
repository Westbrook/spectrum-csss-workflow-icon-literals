import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Menu = ({ width = 24, height = 24, hidden = false, title = 'Menu', desc } = {}) => {
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
      aria-labelledby="${`title-Menu-${count}`}"
      aria-describedby="${`title-Menu-${count}`}"
    >
      <title id="${`title-Menu-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Menu-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zm-5.564 15.707L24 32.142 11.564 19.707A1 1 0 0112.272 18h23.456a1 1 0 01.708 1.707z"
        fill="currentColor"
      />
    </svg>
  `;
};
