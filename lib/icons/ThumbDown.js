import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ThumbDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Thumb Down',
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
      aria-labelledby="${`title-ThumbDown-${count}`}"
      aria-describedby="${`title-ThumbDown-${count}`}"
    >
      <title id="${`title-ThumbDown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ThumbDown-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="24" rx="2" ry="2" width="8" x="4" y="8" />
      <path
        d="M43.236 29.9H32.028a50.694 50.694 0 011.922 12.3 3 3 0 01-3 3c-1.657 0-2.626-1.386-3-3C25.669 32.356 19.947 29 16 29V8h19.711a6 6 0 015.677 4.059l4.684 13.7a2.973 2.973 0 01-2.836 4.141z"
      />
    </svg>
  `;
};
