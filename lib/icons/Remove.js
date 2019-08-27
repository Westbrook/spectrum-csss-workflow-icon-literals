import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Remove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Remove',
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
      aria-labelledby="${`title-Remove-${count}`}"
      aria-describedby="${`title-Remove-${count}`}"
    >
      <title id="${`title-Remove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Remove-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1" ry="1" width="30" x="8" y="20" fill="currentColor" />
    </svg>
  `;
};
