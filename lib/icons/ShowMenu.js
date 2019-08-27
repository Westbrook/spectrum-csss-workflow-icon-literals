import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShowMenu = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Show Menu',
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
      aria-labelledby="${`title-ShowMenu-${count}`}"
      aria-describedby="${`title-ShowMenu-${count}`}"
    >
      <title id="${`title-ShowMenu-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShowMenu-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1" ry="1" width="32" x="8" y="20" />
      <rect height="6" rx="1" ry="1" width="32" x="8" y="8" />
      <rect height="6" rx="1" ry="1" width="32" x="8" y="32" />
    </svg>
  `;
};
