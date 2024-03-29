import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UserLock = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'User Lock',
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
      aria-labelledby="${`title-UserLock-${count}`}"
      aria-describedby="${`title-UserLock-${count}`}"
    >
      <title id="${`title-UserLock-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UserLock-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 33a5 5 0 012.037-4.025 13.991 13.991 0 015.5-10.111 17.789 17.789 0 001.909-7.747c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 003.126 9.469 1.949 1.949 0 01.434 1.2v2.683a1.947 1.947 0 01-1.67 1.887C2.071 27.494 0 34.7 0 37.6V40h18zm27-1h-1v-2a10 10 0 00-20 0v2h-1a1 1 0 00-1 1v14a1 1 0 001 1h22a1 1 0 001-1V33a1 1 0 00-1-1zm-17-2a6 6 0 0112 0v2H28zm8 10.222V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.779a3 3 0 114 0z"
      />
    </svg>
  `;
};
