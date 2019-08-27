import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StrokeWidth = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Stroke Width',
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
      aria-labelledby="${`title-StrokeWidth-${count}`}"
      aria-describedby="${`title-StrokeWidth-${count}`}"
    >
      <title id="${`title-StrokeWidth-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StrokeWidth-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="40" x="4" y="8" />
      <rect height="6" rx="1" ry="1" width="40" x="4" y="18" />
      <rect height="8" rx="1" ry="1" width="40" x="4" y="30" />
    </svg>
  `;
};
