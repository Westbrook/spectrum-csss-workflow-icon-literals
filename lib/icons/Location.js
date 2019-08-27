import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Location = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Location',
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
      aria-labelledby="${`title-Location-${count}`}"
      aria-describedby="${`title-Location-${count}`}"
    >
      <title id="${`title-Location-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Location-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 1.859a16.1 16.1 0 00-16.1 16.1C7.9 26.851 24 47.141 24 47.141s16.1-20.29 16.1-29.182A16.1 16.1 0 0024 1.859zM24 24.2a6.239 6.239 0 116.239-6.239A6.239 6.239 0 0124 24.2z"
        fill="currentColor"
      />
    </svg>
  `;
};
