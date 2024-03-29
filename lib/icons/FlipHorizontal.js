import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlipHorizontal = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flip Horizontal',
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
      aria-labelledby="${`title-FlipHorizontal-${count}`}"
      aria-describedby="${`title-FlipHorizontal-${count}`}"
    >
      <title id="${`title-FlipHorizontal-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlipHorizontal-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="4" x="22" y="42" />
      <rect height="4" rx="1" ry="1" width="4" x="22" y="34" />
      <rect height="4" rx="1" ry="1" width="4" x="22" y="26" />
      <rect height="4" rx="1" ry="1" width="4" x="22" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="22" y="10" />
      <rect height="4" rx="1" ry="1" width="4" x="22" y="2" />
      <path
        d="M44 38.743V9.257a1 1 0 00-1.743-.669L28.988 23.331a1 1 0 000 1.338l13.269 14.743A1 1 0 0044 38.743zM7.6 16.033L14.771 24 7.6 31.967zM5.008 8.255A1 1 0 004 9.257v29.486a1 1 0 001.008 1 .977.977 0 00.735-.333l13.269-14.741a1 1 0 000-1.338L5.743 8.588a.977.977 0 00-.735-.333z"
      />
    </svg>
  `;
};
