import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoreVertical = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Vertical',
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
      aria-labelledby="${`title-MoreVertical-${count}`}"
      aria-describedby="${`title-MoreVertical-${count}`}"
    >
      <title id="${`title-MoreVertical-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoreVertical-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="6" r="6" />
      <circle cx="24" cy="42" r="6" />
    </svg>
  `;
};
