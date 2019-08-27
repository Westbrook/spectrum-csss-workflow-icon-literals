import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Forward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Forward',
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
      aria-labelledby="${`title-Forward-${count}`}"
      aria-describedby="${`title-Forward-${count}`}"
    >
      <title id="${`title-Forward-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Forward-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34 14V7.207a.5.5 0 01.854-.354L47.4 19 34.854 31.146a.5.5 0 01-.854-.353V24H14v17a1 1 0 01-1 1H5a1 1 0 01-1-1V22a8 8 0 018-8z"
        fill="currentColor"
      />
    </svg>
  `;
};
