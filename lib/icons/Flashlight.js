import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Flashlight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flashlight',
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
      aria-labelledby="${`title-Flashlight-${count}`}"
      aria-describedby="${`title-Flashlight-${count}`}"
    >
      <title id="${`title-Flashlight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Flashlight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.552 25.448l8.1-8.1a2 2 0 000-2.828L33.477 3.352a2 2 0 00-2.829 0l-8.1 8.1a1 1 0 00-.286.594l-.675 5.883L2.663 36.852a2.264 2.264 0 000 3.2l5.283 5.283a2.264 2.264 0 003.2 0L30.074 26.41l5.884-.675a1 1 0 00.594-.287zm-14.146.145a3.4 3.4 0 114.808 0 3.4 3.4 0 01-4.809 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
