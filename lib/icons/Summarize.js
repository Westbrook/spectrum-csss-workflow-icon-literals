import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Summarize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Summarize',
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
      aria-labelledby="${`title-Summarize-${count}`}"
      aria-describedby="${`title-Summarize-${count}`}"
    >
      <title id="${`title-Summarize-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Summarize-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39 8H9a1 1 0 01-1-1V5a1 1 0 011-1h30a1 1 0 011 1v2a1 1 0 01-1 1zm1 15v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 001 1h30a1 1 0 001-1zm4-8v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1h38a1 1 0 001-1zM26 43v-7h3.586a1 1 0 00.707-1.707L24 28l-6.293 6.293A1 1 0 0018.414 36H22v7a1 1 0 001 1h2a1 1 0 001-1z"
      />
    </svg>
  `;
};
