import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MarginTop = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Margin Top',
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
      aria-labelledby="${`title-MarginTop-${count}`}"
      aria-describedby="${`title-MarginTop-${count}`}"
    >
      <title id="${`title-MarginTop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MarginTop-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 40V24h32v16zm36 2V22a2 2 0 00-2-2H6a2 2 0 00-2 2v20a2 2 0 002 2h36a2 2 0 002-2z"
      />
      <rect height="12" rx="2" ry="2" width="40" x="4" y="4" />
    </svg>
  `;
};
