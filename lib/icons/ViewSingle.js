import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewSingle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Single',
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
      aria-labelledby="${`title-ViewSingle-${count}`}"
      aria-describedby="${`title-ViewSingle-${count}`}"
    >
      <title id="${`title-ViewSingle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewSingle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 6v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm36 34H8V8h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
