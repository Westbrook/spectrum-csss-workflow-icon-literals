import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Close = ({ width = 24, height = 24, hidden = false, title = 'Close', desc } = {}) => {
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
      aria-labelledby="${`title-Close-${count}`}"
      aria-describedby="${`title-Close-${count}`}"
    >
      <title id="${`title-Close-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Close-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M35.314 8.444L24 19.757 12.686 8.444a1 1 0 00-1.414 0l-2.828 2.828a1 1 0 000 1.414L19.757 24 8.444 35.314a1 1 0 000 1.414l2.828 2.828a1 1 0 001.414 0L24 28.243l11.314 11.313a1 1 0 001.414 0l2.828-2.828a1 1 0 000-1.414L28.243 24l11.313-11.314a1 1 0 000-1.414l-2.828-2.828a1 1 0 00-1.414 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
