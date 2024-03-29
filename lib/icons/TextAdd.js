import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Add',
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
      aria-labelledby="${`title-TextAdd-${count}`}"
      aria-describedby="${`title-TextAdd-${count}`}"
    >
      <title id="${`title-TextAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.239 38A21.4 21.4 0 0120 34V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H2a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h10.28a15.814 15.814 0 01-1.041-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
