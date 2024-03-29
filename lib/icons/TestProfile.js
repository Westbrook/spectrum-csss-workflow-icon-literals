import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TestProfile = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Test Profile',
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
      aria-labelledby="${`title-TestProfile-${count}`}"
      aria-describedby="${`title-TestProfile-${count}`}"
    >
      <title id="${`title-TestProfile-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TestProfile-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.121 38.879l-9.888-9.888a16 16 0 10-4.242 4.242l9.888 9.888a3 3 0 004.242-4.242zM29.178 27.864a10.027 10.027 0 00-4.961-1.719 1.165 1.165 0 01-1.009-1.17v-1.689a1.165 1.165 0 01.3-.754 8.925 8.925 0 002.028-5.566c0-4.212-2.234-6.566-5.609-6.566s-5.673 2.446-5.673 6.566a9.014 9.014 0 002.125 5.566 1.171 1.171 0 01.3.754v1.682a1.16 1.16 0 01-1.013 1.171 9.857 9.857 0 00-4.928 1.628 12.1 12.1 0 1118.443.1z"
        fill="currentColor"
      />
    </svg>
  `;
};
