import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBarHorizontalAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bar Horizontal Add',
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
      aria-labelledby="${`title-GraphBarHorizontalAdd-${count}`}"
      aria-describedby="${`title-GraphBarHorizontalAdd-${count}`}"
    >
      <title id="${`title-GraphBarHorizontalAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBarHorizontalAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="44" rx="1" ry="1" width="4" x="4" y="4" />
      <path
        d="M42 6H10v8h32a2 2 0 002-2V8a2 2 0 00-2-2zM26 16H10v8h15.59a15.931 15.931 0 012.347-1.687A1.873 1.873 0 0028 22v-4a2 2 0 00-2-2zm-8 10h-8v8h8a2 2 0 002-2v-4a2 2 0 00-2-2zm-4 10h-4v8h4a2 2 0 002-2v-4a2 2 0 00-2-2zm10.1 0A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm13.4-8a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5z"
      />
    </svg>
  `;
};
