import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphTrend = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Trend',
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
      aria-labelledby="${`title-GraphTrend-${count}`}"
      aria-describedby="${`title-GraphTrend-${count}`}"
    >
      <title id="${`title-GraphTrend-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphTrend-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.181 9.083l-7.749 11.07L28.6 8.5a1 1 0 00-1.834.106l-7.224 22.328-6.713-6.346a1 1 0 00-1.347-.061L4.36 30.463a1 1 0 00-.36.768v2.575a1 1 0 001.64.768l6.176-5.146 8.284 8.284a1 1 0 001.647-.365l6.51-19.71 4.562 10.079a1 1 0 001.714.126l9.288-13.269A1 1 0 0044 14V9.657a1 1 0 00-1.819-.574z"
        fill="currentColor"
      />
    </svg>
  `;
};
