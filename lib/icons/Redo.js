import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Redo = ({ width = 24, height = 24, hidden = false, title = 'Redo', desc } = {}) => {
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
      aria-labelledby="${`title-Redo-${count}`}"
      aria-describedby="${`title-Redo-${count}`}"
    >
      <title id="${`title-Redo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Redo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.006 26.6C4.219 19.485 10.427 14 17.545 14H34V8a1 1 0 011.707-.7l9.147 9.351a.5.5 0 010 .708l-9.147 9.353A1 1 0 0134 26v-6H17.4a7.267 7.267 0 00-7.386 6.624A7 7 0 0017 34h8a1 1 0 011 1v4a1 1 0 01-1 1h-8A13 13 0 014.006 26.6z"
        fill="currentColor"
      />
    </svg>
  `;
};
