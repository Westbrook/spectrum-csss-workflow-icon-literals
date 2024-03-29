import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DevicePreview = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Device Preview',
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
      aria-labelledby="${`title-DevicePreview-${count}`}"
      aria-describedby="${`title-DevicePreview-${count}`}"
    >
      <title id="${`title-DevicePreview-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DevicePreview-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 8H6a4 4 0 00-4 4v24a4 4 0 004 4h36a4 4 0 004-4V12a4 4 0 00-4-4zm-2 28H6V12h34zm3-9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      />
      <path
        d="M27.619 17.421A10.461 10.461 0 0023 16.273c-6.051 0-11 6.024-11 7.979 0 2.093 5.209 7.475 10.955 7.475 5.794 0 11.045-5.382 11.045-7.475 0-1.652-2.943-5.127-6.381-6.831zM23 30.443A6.443 6.443 0 1129.443 24 6.443 6.443 0 0123 30.443z"
      />
      <path
        d="M24.862 24.058A1.862 1.862 0 0123 22.2a1.836 1.836 0 01.943-1.585 3.423 3.423 0 00-.943-.151A3.536 3.536 0 1026.536 24a3.29 3.29 0 00-.122-.835 1.833 1.833 0 01-1.552.893z"
      />
    </svg>
  `;
};
