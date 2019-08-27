import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Download = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Download',
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
      aria-labelledby="${`title-Download-${count}`}"
      aria-describedby="${`title-Download-${count}`}"
    >
      <title id="${`title-Download-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Download-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 33v7H8v-7a1 1 0 00-1-1H5a1 1 0 00-1 1v9a2 2 0 002 2h36a2 2 0 002-2v-9a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
      />
      <path
        d="M24.354 32.854l9.351-9.147A1 1 0 0033 22h-5V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v17h-5a1 1 0 00-.707 1.707l9.353 9.147a.5.5 0 00.708 0z"
      />
    </svg>
  `;
};
