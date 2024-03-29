import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Trap = ({ width = 24, height = 24, hidden = false, title = 'Trap', desc } = {}) => {
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
      aria-labelledby="${`title-Trap-${count}`}"
      aria-describedby="${`title-Trap-${count}`}"
    >
      <title id="${`title-Trap-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Trap-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.589 9.078a5.818 5.818 0 00-1.53-.969C41.367 6.977 30.383 2.4 24.568 1.67c-5.5-.687-10.478 0-13.055 2.577s-.859 9.619 1.546 14.6a100.336 100.336 0 005.388 9.319l-14.9 14.9a2.754 2.754 0 00.141 3.912 2.755 2.755 0 003.913.141l13.507-13.507a4.938 4.938 0 003.592 1.31 11.96 11.96 0 004.474-1.022 35.788 35.788 0 009.854-6.949 35.6 35.6 0 006.87-9.775c1.467-3.559 1.355-6.434-.309-8.098zm-2.154 7.081A29.026 29.026 0 0137.1 25.1a29.026 29.026 0 01-8.945 6.331c-2.417 1-4.362 1.1-5.2.268s-.729-2.771.268-5.2a29.026 29.026 0 016.331-8.945 29.026 29.026 0 018.945-6.331 9.5 9.5 0 013.461-.826 2.4 2.4 0 011.734.557c.84.838.738 2.78-.259 5.205z"
        fill="currentColor"
      />
    </svg>
  `;
};
