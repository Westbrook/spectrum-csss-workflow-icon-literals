import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LockClosed = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Lock Closed',
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
      aria-labelledby="${`title-LockClosed-${count}`}"
      aria-describedby="${`title-LockClosed-${count}`}"
    >
      <title id="${`title-LockClosed-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LockClosed-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 20h-2v-2a12 12 0 00-24 0v2h-2a2 2 0 00-2 2v20a2 2 0 002 2h28a2 2 0 002-2V22a2 2 0 00-2-2zM26 33.445V37a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3.555a4 4 0 114 0zM32 20H16v-2a8 8 0 0116 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
