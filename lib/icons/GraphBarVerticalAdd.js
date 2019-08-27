import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBarVerticalAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bar Vertical Add',
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
      aria-labelledby="${`title-GraphBarVerticalAdd-${count}`}"
      aria-describedby="${`title-GraphBarVerticalAdd-${count}`}"
    >
      <title id="${`title-GraphBarVerticalAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBarVerticalAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.1 24.1A11.9 11.9 0 1048 36a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5zM31.539 20.772A1.963 1.963 0 0030 20h-4a2 2 0 00-2 2v3.7a15.9 15.9 0 017.539-4.928zM6 32a2 2 0 00-2 2v4h8v-4a2 2 0 00-2-2zM1 44h21.375a15.8 15.8 0 01-1.647-4H1a1 1 0 00-1 1v2a1 1 0 001 1zM42 6a2 2 0 00-2-2h-4a2 2 0 00-2 2v14.254a15.4 15.4 0 018 .989zM20 28h-4a2 2 0 00-2 2v8h6.339a16.091 16.091 0 01-.139-2 15.8 15.8 0 011.579-6.873A1.986 1.986 0 0020 28z"
      />
    </svg>
  `;
};
