import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pending = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pending',
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
      aria-labelledby="${`title-Pending-${count}`}"
      aria-describedby="${`title-Pending-${count}`}"
    >
      <title id="${`title-Pending-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Pending-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 22.086V11a1 1 0 00-1-1h-2a1 1 0 00-1 1v12.586a1 1 0 00.293.707l6.3 6.3a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414l-5.054-5.054a1 1 0 01-.289-.703z"
      />
      <path
        d="M40.063 26A16.193 16.193 0 1122 7.937V4.1A20 20 0 1043.9 26zM32.171 5.759A19.839 19.839 0 0026 4.1v3.837a16.063 16.063 0 014.261 1.148zm4.855 8.66l3.344-1.87a20.117 20.117 0 00-4.726-4.8l-1.917 3.338a16.4 16.4 0 013.299 3.332zm1.949 3.495A15.972 15.972 0 0140.063 22H43.9a19.827 19.827 0 00-1.566-5.965z"
      />
    </svg>
  `;
};
