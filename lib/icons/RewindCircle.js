import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RewindCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rewind Circle',
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
      aria-labelledby="${`title-RewindCircle-${count}`}"
      aria-describedby="${`title-RewindCircle-${count}`}"
    >
      <title id="${`title-RewindCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RewindCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.1 4.2A19.9 19.9 0 114.2 24.1 19.9 19.9 0 0124.1 4.2zm3.614 25.4l4.628 4.049A1 1 0 0034 32.9V15.3a1 1 0 00-1.658-.753L27.714 18.6zm-5.372 4.049A1 1 0 0024 32.9V15.3a1 1 0 00-1.658-.753L11.429 24.1z"
        fill="currentColor"
      />
    </svg>
  `;
};
