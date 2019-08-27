import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewStack = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Stack',
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
      aria-labelledby="${`title-ViewStack-${count}`}"
      aria-describedby="${`title-ViewStack-${count}`}"
    >
      <title id="${`title-ViewStack-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewStack-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="18" rx="2" ry="2" width="40" x="4" y="4" />
      <rect height="18" rx="2" ry="2" width="40" x="4" y="26" />
    </svg>
  `;
};
