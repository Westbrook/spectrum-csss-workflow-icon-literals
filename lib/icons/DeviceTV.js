import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DeviceTV = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device T V',
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
      aria-labelledby="${`title-DeviceTV-${count}`}"
      aria-describedby="${`title-DeviceTV-${count}`}"
    >
      <title id="${`title-DeviceTV-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DeviceTV-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 14H25.414l9.107-9.107a1.8 1.8 0 00-.016-2.421 1.787 1.787 0 00-2.4.007L24 10.586 15.909 2.5a1.783 1.783 0 00-2.4 0 1.8 1.8 0 00-.01 2.414L22.586 14H4a2 2 0 00-2 2v26a2 2 0 002 2h40a2 2 0 002-2V16a2 2 0 00-2-2zm-6 26H6V18h32zm6-2a2 2 0 01-4 0v-2.128a2 2 0 014 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
