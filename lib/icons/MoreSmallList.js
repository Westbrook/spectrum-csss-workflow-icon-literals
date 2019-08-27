import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoreSmallList = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Small List',
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
      aria-labelledby="${`title-MoreSmallList-${count}`}"
      aria-describedby="${`title-MoreSmallList-${count}`}"
    >
      <title id="${`title-MoreSmallList-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoreSmallList-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="12.1" cy="23" r="3.4" />
      <circle cx="24.1" cy="23" r="3.4" />
      <circle cx="36.1" cy="23" r="3.4" />
    </svg>
  `;
};
