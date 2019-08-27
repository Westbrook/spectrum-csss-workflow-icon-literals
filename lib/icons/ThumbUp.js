import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ThumbUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumb Up',
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
      aria-labelledby="${`title-ThumbUp-${count}`}"
      aria-describedby="${`title-ThumbUp-${count}`}"
    >
      <title id="${`title-ThumbUp-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ThumbUp-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="24" rx="2" ry="2" width="8" x="4" y="18" />
      <path
        d="M43.341 18H32.133A48.365 48.365 0 0033.95 5.8a3 3 0 00-3-3c-1.657 0-2.626 1.386-3 3C25.669 15.644 19.947 19 16 19v21h19.711a6 6 0 005.677-4.059l4.684-13.7A3 3 0 0043.341 18z"
      />
    </svg>
  `;
};
