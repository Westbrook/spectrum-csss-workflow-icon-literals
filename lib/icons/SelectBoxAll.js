import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectBoxAll = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Box All',
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
      aria-labelledby="${`title-SelectBoxAll-${count}`}"
      aria-describedby="${`title-SelectBoxAll-${count}`}"
    >
      <title id="${`title-SelectBoxAll-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectBoxAll-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.5 14h-21a4.5 4.5 0 00-4.5 4.5v21a4.5 4.5 0 004.5 4.5h21a4.5 4.5 0 004.5-4.5v-21a4.5 4.5 0 00-4.5-4.5zm1.542 10.82l-14.82 14.819a1 1 0 01-1.414 0l-7.85-7.848a1 1 0 010-1.414l3.113-3.113a1 1 0 011.414 0l4.03 4.036 11-11a1 1 0 011.414 0l3.113 3.113a1 1 0 010 1.407z"
      />
      <path
        d="M10 10h26V8.8A4.8 4.8 0 0031.2 4H8.8A4.8 4.8 0 004 8.8v22.4A4.8 4.8 0 008.8 36H10z"
      />
    </svg>
  `;
};
