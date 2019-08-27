import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Undo = ({ width = 24, height = 24, hidden = false, title = 'Undo', desc } = {}) => {
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
      aria-labelledby="${`title-Undo-${count}`}"
      aria-describedby="${`title-Undo-${count}`}"
    >
      <title id="${`title-Undo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Undo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.994 26.6C43.781 19.485 37.573 14 30.455 14H14V8a1 1 0 00-1.707-.7l-9.147 9.346a.5.5 0 000 .708l9.147 9.353A1 1 0 0014 26v-6h16.6a7.267 7.267 0 017.386 6.624A7 7 0 0131 34h-8a1 1 0 00-1 1v4a1 1 0 001 1h8a13 13 0 0012.994-13.4z"
        fill="currentColor"
      />
    </svg>
  `;
};
