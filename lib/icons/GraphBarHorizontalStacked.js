import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBarHorizontalStacked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bar Horizontal Stacked',
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
      aria-labelledby="${`title-GraphBarHorizontalStacked-${count}`}"
      aria-describedby="${`title-GraphBarHorizontalStacked-${count}`}"
    >
      <title id="${`title-GraphBarHorizontalStacked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBarHorizontalStacked-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="44" rx="1" ry="1" width="4" x="4" y="4" />
      <path
        d="M10 26h6v8h-6zm0-20h18v8H10zm0 10h8v8h-8zm0 20h4v8h-4zm16-20h-6v8h6a2 2 0 002-2v-4a2 2 0 00-2-2zm-8 20h-2v8h2a2 2 0 002-2v-4a2 2 0 00-2-2zM42 6H30v8h12a2 2 0 002-2V8a2 2 0 00-2-2zM22 26h-4v8h4a2 2 0 002-2v-4a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
