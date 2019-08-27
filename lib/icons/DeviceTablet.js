import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DeviceTablet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device Tablet',
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
      aria-labelledby="${`title-DeviceTablet-${count}`}"
      aria-describedby="${`title-DeviceTablet-${count}`}"
    >
      <title id="${`title-DeviceTablet-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DeviceTablet-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 8H6a4 4 0 00-4 4v24a4 4 0 004 4h36a4 4 0 004-4V12a4 4 0 00-4-4zm-2 28H6V12h34zm3-9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  `;
};
