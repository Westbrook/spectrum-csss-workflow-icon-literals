import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Sharpen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sharpen',
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
      aria-labelledby="${`title-Sharpen-${count}`}"
      aria-describedby="${`title-Sharpen-${count}`}"
    >
      <title id="${`title-Sharpen-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Sharpen-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M23 0L8.024 43.348A.5.5 0 008.5 44h29a.5.5 0 00.476-.652z" fill="currentColor" />
    </svg>
  `;
};
