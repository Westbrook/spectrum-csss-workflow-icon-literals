import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TransferToPlatform = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Transfer To Platform',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-TransferToPlatform-${count}`}"
      aria-describedby="${`title-TransferToPlatform-${count}`}"
    >
      <title id="${`title-TransferToPlatform-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TransferToPlatform-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8.157 21.233A6.674 6.674 0 0015.867 16h.944l3.035 5.312 1.69-2.957-2.257-3.95a2.128 2.128 0 00-1.848-1.072h-1.565a6.67 6.67 0 10-7.71 7.9zm31.686 5.534A6.674 6.674 0 0032.133 32h-2.8l-3.035-5.312-1.69 2.957 2.059 3.603.213.374a2.074 2.074 0 001.801 1.045h3.453a6.67 6.67 0 107.71-7.9zm-1.176 10.566a4 4 0 114-4 4 4 0 01-4 4zM29.333 16h2.8a6.667 6.667 0 100-2.667h-3.452a2.074 2.074 0 00-1.8 1.045L16.81 32h-.945a6.667 6.667 0 100 2.667h1.565a2.128 2.128 0 001.848-1.073zm9.334-5.333a4 4 0 11-4 4 4 4 0 014-4z"
        fill="currentColor"
      />
    </svg>
  `;
};
