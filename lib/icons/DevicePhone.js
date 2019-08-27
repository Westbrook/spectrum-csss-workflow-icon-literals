import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DevicePhone = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device Phone',
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
      aria-labelledby="${`title-DevicePhone-${count}`}"
      aria-describedby="${`title-DevicePhone-${count}`}"
    >
      <title id="${`title-DevicePhone-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DevicePhone-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 2H14a4 4 0 00-4 4v36a4 4 0 004 4h18a4 4 0 004-4V6a4 4 0 00-4-4zM21 4h4a1.04 1.04 0 011 1 1.04 1.04 0 01-1 1h-4a1 1 0 010-2zm2 41.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm9-5.5H14V8h18z"
        fill="currentColor"
      />
    </svg>
  `;
};
