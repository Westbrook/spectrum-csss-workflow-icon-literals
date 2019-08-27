import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Rectangle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rectangle',
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
      aria-labelledby="${`title-Rectangle-${count}`}"
      aria-describedby="${`title-Rectangle-${count}`}"
    >
      <title id="${`title-Rectangle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Rectangle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 6H6a2 2 0 00-2 2v32a2 2 0 002 2h36a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H8V10h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
