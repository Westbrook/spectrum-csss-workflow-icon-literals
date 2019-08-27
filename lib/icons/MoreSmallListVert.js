import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoreSmallListVert = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Small List Vert',
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
      aria-labelledby="${`title-MoreSmallListVert-${count}`}"
      aria-describedby="${`title-MoreSmallListVert-${count}`}"
    >
      <title id="${`title-MoreSmallListVert-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoreSmallListVert-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="23" cy="12" r="3.4" />
      <circle cx="23" cy="24" r="3.4" />
      <circle cx="23" cy="36" r="3.4" />
    </svg>
  `;
};
