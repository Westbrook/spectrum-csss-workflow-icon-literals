import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBarHorizontal = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bar Horizontal',
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
      aria-labelledby="${`title-GraphBarHorizontal-${count}`}"
      aria-describedby="${`title-GraphBarHorizontal-${count}`}"
    >
      <title id="${`title-GraphBarHorizontal-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBarHorizontal-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 14H10V6h32a2 2 0 012 2v4a2 2 0 01-2 2zM26 24H10v-8h16a2 2 0 012 2v4a2 2 0 01-2 2zm-8 10h-8v-8h8a2 2 0 012 2v4a2 2 0 01-2 2zm-4 10h-4v-8h4a2 2 0 012 2v4a2 2 0 01-2 2z"
      />
    </svg>
  `;
};
