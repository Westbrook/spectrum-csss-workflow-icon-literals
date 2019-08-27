import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphHistogram = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Histogram',
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
      aria-labelledby="${`title-GraphHistogram-${count}`}"
      aria-describedby="${`title-GraphHistogram-${count}`}"
    >
      <title id="${`title-GraphHistogram-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphHistogram-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.388 38h-4.776a.613.613 0 00-.612.612v-7.775a.837.837 0 00-.837-.837h-4.326a.837.837 0 00-.837.837V22.92a.92.92 0 00-.92-.92h-4.16a.92.92 0 00-.92.92V11a1 1 0 00-1-1h-4a1 1 0 00-1 1V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v14a1 1 0 00-1-1H9a1 1 0 00-1 1v11H4.882a.882.882 0 00-.882.882V44h40v-5.388a.613.613 0 00-.612-.612z"
        fill="currentColor"
      />
    </svg>
  `;
};
