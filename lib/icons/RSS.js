import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Rss = ({ width = 24, height = 24, hidden = false, title = 'Rss', desc } = {}) => {
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
      aria-labelledby="${`title-RSS-${count}`}"
      aria-describedby="${`title-RSS-${count}`}"
    >
      <title id="${`title-RSS-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RSS-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="10.154" cy="37.846" r="6.154" />
      <path
        d="M29.3 44h-3.975a1.9 1.9 0 01-2.025-1.668A19.572 19.572 0 005.724 24.7a1.971 1.971 0 01-1.757-2v-4a2.06 2.06 0 012.25-2A27.434 27.434 0 0131.3 41.8a2.023 2.023 0 01-2 2.2z"
      />
      <path
        d="M43.941 44.091h-3.954a2.021 2.021 0 01-2.044-1.942A34.188 34.188 0 005.9 10.056a2.021 2.021 0 01-1.941-2.019V4.059A2.032 2.032 0 016.06 2.05a42.06 42.06 0 0139.89 39.89 2.075 2.075 0 01-2.009 2.151z"
      />
    </svg>
  `;
};
