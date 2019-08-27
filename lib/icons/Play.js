import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Play = ({ width = 24, height = 24, hidden = false, title = 'Play', desc } = {}) => {
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
      aria-labelledby="${`title-Play-${count}`}"
      aria-describedby="${`title-Play-${count}`}"
    >
      <title id="${`title-Play-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Play-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10.853 4H8a2 2 0 00-2 2v36a2 2 0 002 2h2.853a4.005 4.005 0 002.12-.608l30.09-17.667a2 2 0 000-3.45L12.973 4.608A4.005 4.005 0 0010.853 4z"
        fill="currentColor"
      />
    </svg>
  `;
};
