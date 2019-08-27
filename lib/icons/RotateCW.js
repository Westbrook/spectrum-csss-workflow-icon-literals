import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateCW = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate C W',
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
      aria-labelledby="${`title-RotateCW-${count}`}"
      aria-describedby="${`title-RotateCW-${count}`}"
    >
      <title id="${`title-RotateCW-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RotateCW-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="40.382" cy="31.925" r="2" />
      <circle cx="9.215" cy="34.823" r="2" />
      <circle cx="14.833" cy="39.85" r="2" />
      <circle cx="22.108" cy="42.215" r="2" />
      <circle cx="29.559" cy="41.506" r="2" />
      <circle cx="35.946" cy="37.839" r="2" />
      <path
        d="M24 4.1a19.8 19.8 0 0114.976 6.86l5.508-2.375a.5.5 0 01.678.6L41.647 21.3l-12.589-5.141a.5.5 0 01-.061-.9l6.113-2.635A15.9 15.9 0 008.055 24a12.246 12.246 0 00.373 3.38 1.979 1.979 0 11-3.845.926A18.412 18.412 0 014.1 24 19.9 19.9 0 0124 4.1z"
      />
    </svg>
  `;
};
