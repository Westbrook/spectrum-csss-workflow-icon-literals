import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateCCW = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate CC W',
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
      aria-labelledby="${`title-RotateCCW-${count}`}"
      aria-describedby="${`title-RotateCCW-${count}`}"
    >
      <title id="${`title-RotateCCW-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RotateCCW-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="7.618" cy="31.925" r="2" />
      <circle cx="38.785" cy="34.823" r="2" />
      <circle cx="33.167" cy="39.85" r="2" />
      <circle cx="25.892" cy="42.215" r="2" />
      <circle cx="18.441" cy="41.506" r="2" />
      <circle cx="12.054" cy="37.839" r="2" />
      <path
        d="M24 4.1a19.8 19.8 0 00-14.976 6.86L3.516 8.586a.5.5 0 00-.678.6L6.353 21.3l12.589-5.141a.5.5 0 00.061-.9l-6.113-2.631A15.9 15.9 0 0139.945 24a12.246 12.246 0 01-.373 3.38 1.979 1.979 0 103.845.926A18.412 18.412 0 0043.9 24 19.9 19.9 0 0024 4.1z"
      />
    </svg>
  `;
};
