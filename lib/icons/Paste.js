import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Paste = ({ width = 24, height = 24, hidden = false, title = 'Paste', desc } = {}) => {
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
      aria-labelledby="${`title-Paste-${count}`}"
      aria-describedby="${`title-Paste-${count}`}"
    >
      <title id="${`title-Paste-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Paste-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 6v8a2 2 0 01-2 2H12a2 2 0 01-2-2V6H8a2 2 0 00-2 2v34a2 2 0 002 2h32a2 2 0 002-2V8a2 2 0 00-2-2z"
      />
      <path
        d="M30 6a6 6 0 00-12 0h-4v5a1 1 0 001 1h18a1 1 0 001-1V6zm-6 3a3 3 0 113-3 3 3 0 01-3 3z"
      />
    </svg>
  `;
};
