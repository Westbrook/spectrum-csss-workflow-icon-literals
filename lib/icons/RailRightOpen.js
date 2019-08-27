import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RailRightOpen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rail Right Open',
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
      aria-labelledby="${`title-RailRightOpen-${count}`}"
      aria-describedby="${`title-RailRightOpen-${count}`}"
    >
      <title id="${`title-RailRightOpen-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RailRightOpen-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.933 30H32a2 2 0 002-2v-8a2 2 0 00-2-2H20.933V7.481a1 1 0 00-1.707-.707L2 24l17.226 17.226a1 1 0 001.707-.707z"
      />
      <rect height="40" rx="1" ry="1" width="6" x="38" y="4" />
    </svg>
  `;
};
