import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Graphic = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graphic',
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
      aria-labelledby="${`title-Graphic-${count}`}"
      aria-describedby="${`title-Graphic-${count}`}"
    >
      <title id="${`title-Graphic-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Graphic-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45 18H32V1.151a1 1 0 00-1.707-.707L.4 30.293A1 1 0 001.111 32H14.18a11.981 11.981 0 0020.746 10H45a1 1 0 001-1V19a1 1 0 00-1-1zM15.5 28.2h-8L28.2 7.536V18H23a1 1 0 00-1 1v3.7a12.027 12.027 0 00-6.5 5.5zm10.5 14a8.2 8.2 0 118.2-8.2 8.21 8.21 0 01-8.2 8.2z"
        fill="currentColor"
      />
    </svg>
  `;
};
