import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewGrid = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Grid',
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
      aria-labelledby="${`title-ViewGrid-${count}`}"
      aria-describedby="${`title-ViewGrid-${count}`}"
    >
      <title id="${`title-ViewGrid-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewGrid-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 6H6a2 2 0 00-2 2v8h10zm4 0h10v10H18zm0 28h10v10H18zm0-14h10v10H18zM32 6v10h10V8a2 2 0 00-2-2zM4 20h10v10H4zm28 24h8a2 2 0 002-2v-8H32zm0-24h10v10H32zM14 34H4v8a2 2 0 002 2h8z"
      />
    </svg>
  `;
};
