import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Book = ({ width = 24, height = 24, hidden = false, title = 'Book', desc } = {}) => {
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
      aria-labelledby="${`title-Book-${count}`}"
      aria-describedby="${`title-Book-${count}`}"
    >
      <title id="${`title-Book-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Book-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27.8 38H12.237a6.16 6.16 0 01-6.121-4.8A6.01 6.01 0 0112 26h16.981a2 2 0 001.618-.824l14.477-19.9A.8.8 0 0044.429 4H21.617A2 2 0 0020 4.824L4 26h.045c-2.282 3.019-2.982 7.3-.39 11.731A8.811 8.811 0 0012 42h16.981a2 2 0 001.618-.824l14.477-19.9A.8.8 0 0044.429 20h-3.538z"
        fill="currentColor"
      />
    </svg>
  `;
};
