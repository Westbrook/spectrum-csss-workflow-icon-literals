import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ExportOriginal = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Export Original',
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
      aria-labelledby="${`title-ExportOriginal-${count}`}"
      aria-describedby="${`title-ExportOriginal-${count}`}"
    >
      <title id="${`title-ExportOriginal-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ExportOriginal-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20 29V19a2 2 0 012-2h14V8a2 2 0 00-2-2H4a2 2 0 00-2 2v32a2 2 0 002 2h30a2 2 0 002-2v-9H22a2 2 0 01-2-2z"
      />
      <path
        d="M40 16.564a.5.5 0 01.858-.349l6.988 7.431a.5.5 0 010 .708l-6.988 7.457a.5.5 0 01-.858-.349V27H25a1 1 0 01-1-1v-4a1 1 0 011-1h15z"
      />
    </svg>
  `;
};
