import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Box = ({ width = 24, height = 24, hidden = false, title = 'Box', desc } = {}) => {
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
      aria-labelledby="${`title-Box-${count}`}"
      aria-describedby="${`title-Box-${count}`}"
    >
      <title id="${`title-Box-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Box-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22 46L5.029 36.572A2 2 0 014 34.823V18l18 10zm20.971-9.428L26 46V28l18-10v16.823a2 2 0 01-1.029 1.749zM32.3 6.155l-7.347-3.978a2 2 0 00-1.906 0L4.74 12.094a1.03 1.03 0 000 1.812l6.911 3.744zm10.96 5.939l-6.8-3.682-20.645 11.5L24 24.339l19.26-10.433a1.03 1.03 0 000-1.812z"
      />
    </svg>
  `;
};
