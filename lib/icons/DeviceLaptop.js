import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DeviceLaptop = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device Laptop',
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
      aria-labelledby="${`title-DeviceLaptop-${count}`}"
      aria-describedby="${`title-DeviceLaptop-${count}`}"
    >
      <title id="${`title-DeviceLaptop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DeviceLaptop-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47.474 40.421L42 28V7.2A1.2 1.2 0 0040.8 6H7.2A1.2 1.2 0 006 7.2V28L.526 40.421A1.2 1.2 0 001.665 42h44.67a1.2 1.2 0 001.139-1.579zM9 9.25h30V28H9zm7.8 30.35l1.2-4.8h12l1.2 4.8z"
        fill="currentColor"
      />
    </svg>
  `;
};
