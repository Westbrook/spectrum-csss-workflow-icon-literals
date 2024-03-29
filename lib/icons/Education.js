import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Education = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Education',
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
      aria-labelledby="${`title-Education-${count}`}"
      aria-describedby="${`title-Education-${count}`}"
    >
      <title id="${`title-Education-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Education-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.105 32.025a2.006 2.006 0 001.79 0L40 24.472V30c0 4.418-7.163 10-16 10a20.292 20.292 0 01-12-3.845v-9.683z"
      />
      <path
        d="M4 18l-2.211-1.106a1 1 0 010-1.788L23.106 4.447a2 2 0 011.788 0l21.317 10.659a1 1 0 010 1.788L24.89 27.555a2 2 0 01-1.782 0L12.315 22.21l9.29-4.82A4.879 4.879 0 0024 18c2.209 0 4-1.343 4-3s-1.791-3-4-3a4.1 4.1 0 00-3.739 1.963L8 20v15.02a29.99 29.99 0 00.586 5.9l1.374 4.69A2 2 0 018 48H4a2 2 0 01-1.958-2.409l1.39-4.716A30.006 30.006 0 004 35.07z"
      />
    </svg>
  `;
};
