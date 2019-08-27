import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RailRightClose = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rail Right Close',
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
      aria-labelledby="${`title-RailRightClose-${count}`}"
      aria-describedby="${`title-RailRightClose-${count}`}"
    >
      <title id="${`title-RailRightClose-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RailRightClose-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27.067 18H16a2 2 0 00-2 2v8a2 2 0 002 2h11.067v10.519a1 1 0 001.707.707L46 24 28.774 6.774a1 1 0 00-1.707.707z"
      />
      <rect height="40" rx="1" ry="1" width="6" x="4" y="4" />
    </svg>
  `;
};
