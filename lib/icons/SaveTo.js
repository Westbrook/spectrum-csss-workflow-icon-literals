import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SaveTo = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Save To',
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
      aria-labelledby="${`title-SaveTo-${count}`}"
      aria-describedby="${`title-SaveTo-${count}`}"
    >
      <title id="${`title-SaveTo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SaveTo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.354 26.854l9.351-9.147A1 1 0 0033 16h-5V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v13h-5a1 1 0 00-.707 1.707l9.353 9.147a.5.5 0 00.708 0z"
      />
      <path
        d="M42 12h-5a1 1 0 00-1 1v2a1 1 0 001 1h3v24H8V16h3a1 1 0 001-1v-2a1 1 0 00-1-1H6a2 2 0 00-2 2v28a2 2 0 002 2h36a2 2 0 002-2V14a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
