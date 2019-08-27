import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Star = ({ width = 24, height = 24, hidden = false, title = 'Star', desc } = {}) => {
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
      aria-labelledby="${`title-Star-${count}`}"
      aria-describedby="${`title-Star-${count}`}"
    >
      <title id="${`title-Star-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Star-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.827 2.741l5.5 14.559 15.547.736a1.031 1.031 0 01.6 1.834L34.33 29.605l4.1 15.014a1.031 1.031 0 01-1.56 1.133l-13.007-8.543-13.011 8.543a1.031 1.031 0 01-1.56-1.133l4.1-15.014L1.251 19.87a1.031 1.031 0 01.6-1.834l15.543-.736L22.9 2.741a1.031 1.031 0 011.927 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
