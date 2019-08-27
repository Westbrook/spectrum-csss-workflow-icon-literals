import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Home = ({ width = 24, height = 24, hidden = false, title = 'Home', desc } = {}) => {
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
      aria-labelledby="${`title-Home-${count}`}"
      aria-describedby="${`title-Home-${count}`}"
    >
      <title id="${`title-Home-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Home-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.669 24.544L25.456 3.331a2 2 0 00-2.829 0L1.414 24.544a2 2 0 000 2.829l2.042 2.041A2 2 0 004.87 30H6v12a2 2 0 002 2h9a1 1 0 001-1V27a1 1 0 011-1h10a1 1 0 011 1l.037 16a1 1 0 001 1H40a2 2 0 002-2V30h1.213a2 2 0 001.414-.586l2.042-2.041a2 2 0 000-2.829z"
        fill="currentColor"
      />
    </svg>
  `;
};
