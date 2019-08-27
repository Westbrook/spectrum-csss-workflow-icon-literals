import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableAndChart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table And Chart',
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
      aria-labelledby="${`title-TableAndChart-${count}`}"
      aria-describedby="${`title-TableAndChart-${count}`}"
    >
      <title id="${`title-TableAndChart-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableAndChart-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1" ry="1" width="12" x="2" y="14" />
      <rect height="12" rx="1" ry="1" width="12" x="18" y="8" />
      <path
        d="M45 0H35a1 1 0 00-1 1v19h12V1a1 1 0 00-1-1zm-1 24H4a2 2 0 00-2 2v16a2 2 0 002 2h40a2 2 0 002-2V26a2 2 0 00-2-2zM14 40H6v-4h8zm0-8H6v-4h8zm28 8H18v-4h24zm0-8H18v-4h24z"
      />
    </svg>
  `;
};
