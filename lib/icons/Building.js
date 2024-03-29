import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Building = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Building',
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
      aria-labelledby="${`title-Building-${count}`}"
      aria-describedby="${`title-Building-${count}`}"
    >
      <title id="${`title-Building-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Building-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 6v36a2 2 0 002 2h14V33a1 1 0 011-1h6a1 1 0 011 1v11h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm12 30H8v-4h8zm0-8H8v-4h8zm0-8H8v-4h8zm0-8H8V8h8zm12 16h-8v-4h8zm0-8h-8v-4h8zm0-8h-8V8h8zm12 24h-8v-4h8zm0-8h-8v-4h8zm0-8h-8v-4h8zm0-8h-8V8h8z"
        fill="currentColor"
      />
    </svg>
  `;
};
