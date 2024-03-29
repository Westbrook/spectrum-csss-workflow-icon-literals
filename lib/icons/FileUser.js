import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileUser = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File User',
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
      aria-labelledby="${`title-FileUser-${count}`}"
      aria-describedby="${`title-FileUser-${count}`}"
    >
      <title id="${`title-FileUser-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileUser-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.086 37.142v-1.66a1.149 1.149 0 01.292-.741 8.766 8.766 0 001.994-5.471c0-4.14-2.2-6.454-5.514-6.454s-5.576 2.4-5.576 6.454a8.863 8.863 0 002.089 5.471 1.149 1.149 0 01.292.741v1.653a1.14 1.14 0 01-.995 1.151c-6.666.58-7.663 5.14-7.663 6.938 0 .2-.015 2.58 0 2.777h23.774s.021-2.577.021-2.777c0-1.723-1.177-6.267-7.723-6.931a1.146 1.146 0 01-.991-1.151z"
      />
      <path
        d="M20 4L8 16h12zm18 0H24v14a2 2 0 01-2 2H8v22a2 2 0 002 2h10.089a10.762 10.762 0 017.669-9 12.553 12.553 0 01-1.477-5.727c0-6.154 3.938-10.453 9.576-10.453a9.75 9.75 0 014.143.9V6a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
