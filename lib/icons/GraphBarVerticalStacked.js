import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBarVerticalStacked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bar Vertical Stacked',
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
      aria-labelledby="${`title-GraphBarVerticalStacked-${count}`}"
      aria-describedby="${`title-GraphBarVerticalStacked-${count}`}"
    >
      <title id="${`title-GraphBarVerticalStacked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBarVerticalStacked-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="44" y="40" />
      <path
        d="M14 32h8v6h-8zm20-12h8v18h-8zM24 30h8v8h-8zM4 34h8v4H4zm28-12v6h-8v-6a2 2 0 012-2h4a2 2 0 012 2zm-20 8v2H4v-2a2 2 0 012-2h4a2 2 0 012 2zM42 6v12h-8V6a2 2 0 012-2h4a2 2 0 012 2zM22 26v4h-8v-4a2 2 0 012-2h4a2 2 0 012 2z"
      />
    </svg>
  `;
};
