import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextItalic = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Italic',
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
      aria-labelledby="${`title-TextItalic-${count}`}"
      aria-describedby="${`title-TextItalic-${count}`}"
    >
      <title id="${`title-TextItalic-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextItalic-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.551 6h-30a3.162 3.162 0 00-2.727 2l-2.548 7a.677.677 0 00.636 1h2a1.583 1.583 0 001.364-1l1.82-5h10L12.9 38h-3a1.583 1.583 0 00-1.36 1l-.727 2a.676.676 0 00.636 1h12a1.584 1.584 0 001.364-1l.727-2a.677.677 0 00-.636-1h-3L29.1 10h10l-1.82 5a.677.677 0 00.636 1h2a1.583 1.583 0 001.364-1l2.548-7a1.354 1.354 0 00-1.277-2z"
        fill="currentColor"
      />
    </svg>
  `;
};
