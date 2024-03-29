import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LockOpen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Lock Open',
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
      aria-labelledby="${`title-LockOpen-${count}`}"
      aria-describedby="${`title-LockOpen-${count}`}"
    >
      <title id="${`title-LockOpen-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LockOpen-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 20H16v-7.652C16 10.131 17.646 4 24 4a7.988 7.988 0 017.433 5.1.967.967 0 00.909.609 1.011 1.011 0 00.45-.107L34.6 8.7a1.019 1.019 0 00.564-.9A11.684 11.684 0 0024 .1c-8.1 0-12 7.1-12 12.337V20h-2a2 2 0 00-2 2v20a2 2 0 002 2h28a2 2 0 002-2V22a2 2 0 00-2-2zM26 33.445V37a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3.555a4 4 0 114 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
