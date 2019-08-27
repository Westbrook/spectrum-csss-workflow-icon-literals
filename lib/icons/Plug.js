import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Plug = ({ width = 24, height = 24, hidden = false, title = 'Plug', desc } = {}) => {
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
      aria-labelledby="${`title-Plug-${count}`}"
      aria-describedby="${`title-Plug-${count}`}"
    >
      <title id="${`title-Plug-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Plug-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.3 35.408a8.8 8.8 0 010-12.445l6.223-6.223a2.934 2.934 0 010-4.148l4.148-4.148a2.934 2.934 0 014.148 0l2.074 2.074 9.334-9.334a1.467 1.467 0 012.074 0l2.074 2.074a1.467 1.467 0 010 2.074l-9.334 9.334 8.3 8.3 9.334-9.334a1.467 1.467 0 012.074 0l2.067 2.068a1.467 1.467 0 010 2.074l-9.334 9.334 2.074 2.074a2.934 2.934 0 010 4.148l-4.148 4.148a2.934 2.934 0 01-4.148 0L25.037 43.7a8.8 8.8 0 01-12.445 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
