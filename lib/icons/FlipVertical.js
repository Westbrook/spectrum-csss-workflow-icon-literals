import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlipVertical = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flip Vertical',
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
      aria-labelledby="${`title-FlipVertical-${count}`}"
      aria-describedby="${`title-FlipVertical-${count}`}"
    >
      <title id="${`title-FlipVertical-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlipVertical-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="4" x="2" y="22" />
      <rect height="4" rx="1" ry="1" width="4" x="10" y="22" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="22" />
      <rect height="4" rx="1" ry="1" width="4" x="26" y="22" />
      <rect height="4" rx="1" ry="1" width="4" x="34" y="22" />
      <rect height="4" rx="1" ry="1" width="4" x="42" y="22" />
      <path
        d="M9.257 44h29.486a1 1 0 00.669-1.743L24.669 28.988a1 1 0 00-1.338 0L8.588 42.257A1 1 0 009.257 44zM31.968 7.6L24 14.771 16.032 7.6zM38.743 4H9.257a1 1 0 00-.669 1.743l14.743 13.269a1 1 0 001.338 0L39.412 5.743A1 1 0 0038.743 4z"
      />
    </svg>
  `;
};
