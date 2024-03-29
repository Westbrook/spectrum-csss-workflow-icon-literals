import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Slice = ({ width = 24, height = 24, hidden = false, title = 'Slice', desc } = {}) => {
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
      aria-labelledby="${`title-Slice-${count}`}"
      aria-describedby="${`title-Slice-${count}`}"
    >
      <title id="${`title-Slice-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Slice-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.155 11.4L33.947 2.551a2 2 0 00-2.809.33L25.516 9.9a1.98 1.98 0 00.2 2.652l-.906 1.144a9.968 9.968 0 01-1.369 1.417L19.7 18.289a9.969 9.969 0 00-1.745 1.924L.084 45.981l30.628-13.636 4.676-8.027a10.11 10.11 0 01.8-1.171l1.2-1.51a1.976 1.976 0 002.529-.473l5.576-6.958a2 2 0 00-.338-2.806zM32.6 21.556l-4.553 7.817-17.1 7.613 10.59-15.274 5.405-4.59 1.742-2.2 5.665 4.424z"
        fill="currentColor"
      />
    </svg>
  `;
};
