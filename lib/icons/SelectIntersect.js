import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectIntersect = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Intersect',
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
      aria-labelledby="${`title-SelectIntersect-${count}`}"
      aria-describedby="${`title-SelectIntersect-${count}`}"
    >
      <title id="${`title-SelectIntersect-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectIntersect-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 14h4v8H4zm36 12h4v8h-4zM32 6a2 2 0 00-2-2h-4v4h2v4h4zm12 12a2 2 0 00-2-2h-6v4h4v2h4zM14 4h8v4h-8zm2 24h4v4h-4zm0-6h4v4h-4zm4-2v-4h-2a2 2 0 00-2 2v2zm2-4h4v4h-4zm0 6h4v4h-4zm0 6h4v4h-4zm10 2v-2h-4v4h2a2 2 0 002-2zm-4-8h4v4h-4zm0-6h4v4h-4zm-2 24h8v4h-8zM8 8h2V4H6a2 2 0 00-2 2v4h4zm0 20v-2H4v4a2 2 0 002 2h6v-4zm12 12v-4h-4v6a2 2 0 002 2h4v-4zm20 0v-2h4v4a2 2 0 01-2 2h-4v-4z"
      />
    </svg>
  `;
};
