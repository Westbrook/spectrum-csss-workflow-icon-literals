import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBarVertical = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bar Vertical',
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
      aria-labelledby="${`title-GraphBarVertical-${count}`}"
      aria-describedby="${`title-GraphBarVertical-${count}`}"
    >
      <title id="${`title-GraphBarVertical-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBarVertical-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34 6v32h8V6a2 2 0 00-2-2h-4a2 2 0 00-2 2zM24 22v16h8V22a2 2 0 00-2-2h-4a2 2 0 00-2 2zm-10 8v8h8v-8a2 2 0 00-2-2h-4a2 2 0 00-2 2zM4 34v4h8v-4a2 2 0 00-2-2H6a2 2 0 00-2 2z"
      />
      <rect height="4" rx="1" ry="1" width="44" y="40" />
    </svg>
  `;
};
