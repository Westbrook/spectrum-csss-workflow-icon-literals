import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Starburst = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Starburst',
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
      aria-labelledby="${`title-Starburst-${count}`}"
      aria-describedby="${`title-Starburst-${count}`}"
    >
      <title id="${`title-Starburst-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Starburst-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M25.062 4.739l3.2 9.012 8.639-4.106a1.111 1.111 0 011.48 1.48l-4.101 8.639 9.012 3.2a1.111 1.111 0 010 2.094l-9.012 3.2 4.107 8.639a1.111 1.111 0 01-1.48 1.48l-8.64-4.097-3.2 9.012a1.111 1.111 0 01-2.094 0l-3.2-9.012-8.639 4.107a1.111 1.111 0 01-1.48-1.48l4.106-8.639-9.012-3.2a1.111 1.111 0 010-2.094l9.012-3.2-4.115-8.649a1.111 1.111 0 011.48-1.48l8.639 4.106 3.2-9.012a1.111 1.111 0 012.098 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
