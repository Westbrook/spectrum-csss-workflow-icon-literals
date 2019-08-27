import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MarginBottom = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Margin Bottom',
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
      aria-labelledby="${`title-MarginBottom-${count}`}"
      aria-describedby="${`title-MarginBottom-${count}`}"
    >
      <title id="${`title-MarginBottom-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MarginBottom-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M40 8v16H8V8zm2-4H6a2 2 0 00-2 2v20a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2z" />
      <rect height="12" rx="2" ry="2" width="40" x="4" y="32" />
    </svg>
  `;
};
