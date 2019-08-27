import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Rewind = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rewind',
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
      aria-labelledby="${`title-Rewind-${count}`}"
      aria-describedby="${`title-Rewind-${count}`}"
    >
      <title id="${`title-Rewind-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Rewind-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6 24L24.331 7.5A1 1 0 0126 8.246v31.509a1 1 0 01-1.669.743zm24-10.8l6.331-5.7A1 1 0 0138 8.246v31.509a1 1 0 01-1.669.743L30 34.8z"
      />
    </svg>
  `;
};
