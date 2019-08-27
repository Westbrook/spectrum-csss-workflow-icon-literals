import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FastForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Fast Forward',
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
      aria-labelledby="${`title-FastForward-${count}`}"
      aria-describedby="${`title-FastForward-${count}`}"
    >
      <title id="${`title-FastForward-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FastForward-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20 42V5.729a2 2 0 013.257-1.556l21.71 18.133a2 2 0 010 3.112l-21.71 18.134A2 2 0 0120 42zm-4-30.523l-8.743-7.3A2 2 0 004 5.729V42a2 2 0 003.257 1.556L16 36.249z"
      />
    </svg>
  `;
};
