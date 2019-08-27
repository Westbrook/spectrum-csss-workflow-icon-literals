import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FastForwardCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Fast Forward Circle',
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
      aria-labelledby="${`title-FastForwardCircle-${count}`}"
      aria-describedby="${`title-FastForwardCircle-${count}`}"
    >
      <title id="${`title-FastForwardCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FastForwardCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm1.481 29.73a1 1 0 01-1.581-.813V14.983a1 1 0 011.581-.813L38.1 23.187a1 1 0 010 1.627zM19.9 29.243l-6.419 4.587a1 1 0 01-1.581-.813V14.983a1 1 0 011.581-.813l6.419 4.587z"
        fill="currentColor"
      />
    </svg>
  `;
};
