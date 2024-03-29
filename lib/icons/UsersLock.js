import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const UsersLock = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Users Lock',
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
      aria-labelledby="${`title-UsersLock-${count}`}"
      aria-describedby="${`title-UsersLock-${count}`}"
    >
      <title id="${`title-UsersLock-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-UsersLock-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 32v-1.609c0-5.186-4.205-10.061-9.382-10.372A10 10 0 0024 30v2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V34a2 2 0 00-2-2zm-16-2a6 6 0 0112 0v2H28zm8 10.222V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.779a3 3 0 114 0zM30.72 5.227a8.325 8.325 0 00-2.288.338c1.729 2.17 2.851 5.273 2.851 9.552 0 .383-.023.772-.048 1.161a13.93 13.93 0 016.664.279 14.357 14.357 0 00.239-2.429c0-6.048-2.954-8.901-7.418-8.901zm-11.52 0c-4.96 0-8.336 3.317-8.336 9.89a16.924 16.924 0 003.126 9.469 1.943 1.943 0 01.435 1.2v2.683a1.947 1.947 0 01-1.67 1.887C2.071 31.494 0 38.7 0 41.6V44h18V33a5 5 0 012.037-4.025A14.01 14.01 0 0127.2 17.781a16.047 16.047 0 00.242-2.665C27.441 8.4 24.159 5.227 19.2 5.227z"
      />
    </svg>
  `;
};
