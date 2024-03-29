import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gauge4 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gauge4',
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
      aria-labelledby="${`title-Gauge4-${count}`}"
      aria-describedby="${`title-Gauge4-${count}`}"
    >
      <title id="${`title-Gauge4-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gauge4-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.692 25.05l2.822-3.42c.1-.127.178-.27.271-.4a19.74 19.74 0 01-.623 15.135.994.994 0 01-1.6.257l-1.53-1.53a.991.991 0 01-.207-1.079 15.682 15.682 0 00.867-8.963zm-7.461-10.665a15.46 15.46 0 00-6.038-2.194A15.963 15.963 0 009.176 34.01a.986.986 0 01-.207 1.077l-1.529 1.53a.994.994 0 01-1.6-.257A19.8 19.8 0 014.263 24.8a20 20 0 0131.111-13.2zm7.391.498a1.684 1.684 0 01.177 2.282L26.671 34.489a3.7 3.7 0 01-5.419.419 3.7 3.7 0 010-5.436l16.081-14.588a1.685 1.685 0 012.289-.001z"
      />
    </svg>
  `;
};
