import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphTrendAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Trend Add',
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
      aria-labelledby="${`title-GraphTrendAdd-${count}`}"
      aria-describedby="${`title-GraphTrendAdd-${count}`}"
    >
      <title id="${`title-GraphTrendAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphTrendAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.1 36a15.856 15.856 0 016.26-12.623l1.9-5.74 1.663 3.674a15.721 15.721 0 019.728-.774l4.174-5.963A1 1 0 0044 14V9.657a1 1 0 00-1.819-.574l-7.749 11.07L28.6 8.5a1 1 0 00-1.835.105l-7.222 22.329-6.714-6.346a1 1 0 00-1.347-.061l-7.123 5.936a1 1 0 00-.359.768v2.575a1 1 0 001.641.769l6.176-5.146 8.283 8.283c.031.031.072.036.106.062A15.89 15.89 0 0120.1 36z"
      />
      <path
        d="M24.1 36A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm13.4-8a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5z"
      />
    </svg>
  `;
};
