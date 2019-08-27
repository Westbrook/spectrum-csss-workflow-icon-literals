import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Heart = ({ width = 24, height = 24, hidden = false, title = 'Heart', desc } = {}) => {
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
      aria-labelledby="${`title-Heart-${count}`}"
      aria-describedby="${`title-Heart-${count}`}"
    >
      <title id="${`title-Heart-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Heart-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M33.091 7.455c-3.8 0-7.137 2.512-9.091 5.454-1.954-2.942-5.294-5.454-9.091-5.454A10.909 10.909 0 004 18.364C4 28.25 24 42 24 42s20-14 20-23.636A10.909 10.909 0 0033.091 7.455z"
        fill="currentColor"
      />
    </svg>
  `;
};
