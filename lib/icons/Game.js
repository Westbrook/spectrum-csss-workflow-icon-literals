import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Game = ({ width = 24, height = 24, hidden = false, title = 'Game', desc } = {}) => {
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
      aria-labelledby="${`title-Game-${count}`}"
      aria-describedby="${`title-Game-${count}`}"
    >
      <title id="${`title-Game-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Game-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.289 40.511A3.976 3.976 0 0048 36.382a4.659 4.659 0 00-.2-1.334l-3.445-11.513c-2.35-7.856-8.954-14.7-16.391-14.7h-7.928C12.6 8.831 6 15.679 3.645 23.535L.2 35.048a4.659 4.659 0 00-.2 1.334 3.976 3.976 0 003.711 4.129 3.408 3.408 0 001.323-.273l2.2-1.762A26.7 26.7 0 0124 32.443a26.7 26.7 0 0116.771 6.033l2.2 1.762a3.408 3.408 0 001.318.273zM20.608 24.845a7.2 7.2 0 11-5.974-8.245 7.2 7.2 0 015.974 8.245zM32.2 24a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2zm6 8.4a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2z"
      />
      <circle cx="13.5" cy="23.711" r="4" />
    </svg>
  `;
};
