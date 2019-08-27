import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Transparency = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Transparency',
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
      aria-labelledby="${`title-Transparency-${count}`}"
      aria-describedby="${`title-Transparency-${count}`}"
    >
      <title id="${`title-Transparency-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Transparency-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M16 16h8v8h-8zm8 8h8v8h-8z" />
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM8 32h8v-8H8v-8h8V8h8v8h8V8h8v8h-8v8h8v8h-8v8h-8v-8h-8v8H8z"
      />
    </svg>
  `;
};
