import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PasteText = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Paste Text',
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
      aria-labelledby="${`title-PasteText-${count}`}"
      aria-describedby="${`title-PasteText-${count}`}"
    >
      <title id="${`title-PasteText-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PasteText-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30 6a6 6 0 00-12 0h-4v5a1 1 0 001 1h18a1 1 0 001-1V6zm-6 3a3 3 0 113-3 3 3 0 01-3 3z"
      />
      <path
        d="M40 6h-2v8a2 2 0 01-2 2H12a2 2 0 01-2-2V6H8a2 2 0 00-2 2v34a2 2 0 002 2h32a2 2 0 002-2V8a2 2 0 00-2-2zm-6 21a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1h-4v10h1a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1h1V26h-4v.973a1 1 0 01-1 1h-2a1 1 0 01-1-1V23a1 1 0 011-1h18a1 1 0 011 1z"
      />
    </svg>
  `;
};
