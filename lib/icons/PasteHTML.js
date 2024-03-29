import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PasteHTML = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Paste HTM L',
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
      aria-labelledby="${`title-PasteHTML-${count}`}"
      aria-describedby="${`title-PasteHTML-${count}`}"
    >
      <title id="${`title-PasteHTML-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PasteHTML-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30 6a6 6 0 00-12 0h-4v5a1 1 0 001 1h18a1 1 0 001-1V6zm-6 3a3 3 0 113-3 3 3 0 01-3 3z"
      />
      <path
        d="M40 6h-2v8a2 2 0 01-2 2H12a2 2 0 01-2-2V6H8a2 2 0 00-2 2v34a2 2 0 002 2h32a2 2 0 002-2V8a2 2 0 00-2-2zM19.242 34a.5.5 0 010 .707l-2.121 2.121a.5.5 0 01-.707 0l-6.121-6.121a1 1 0 010-1.414l6.121-6.121a.5.5 0 01.707 0l2.121 2.121a.5.5 0 010 .707l-4 4zm4.817 5.9a.5.5 0 01-.588.392l-2.942-.589a.5.5 0 01-.392-.588l3.8-19.02a.5.5 0 01.588-.392l2.942.589a.5.5 0 01.392.588zm14.062-9.2L32 36.828a.5.5 0 01-.707 0l-2.121-2.121a.5.5 0 010-.707l4-4-4-4a.5.5 0 010-.707l2.121-2.121a.5.5 0 01.707 0l6.121 6.121a1 1 0 010 1.414z"
      />
    </svg>
  `;
};
