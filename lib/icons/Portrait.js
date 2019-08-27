import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Portrait = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Portrait',
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
      aria-labelledby="${`title-Portrait-${count}`}"
      aria-describedby="${`title-Portrait-${count}`}"
    >
      <title id="${`title-Portrait-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Portrait-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="13" r="4.5" />
      <path
        d="M40 2H8a2 2 0 00-2 2v40a2 2 0 002 2h32a2 2 0 002-2V4a2 2 0 00-2-2zm-2 40h-8v-8a2 2 0 002-2v-8a4 4 0 00-4-4h-8a4 4 0 00-4 4v8a2 2 0 002 2v8h-8V6h28z"
      />
    </svg>
  `;
};
