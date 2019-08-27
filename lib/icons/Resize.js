import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Resize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Resize',
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
      aria-labelledby="${`title-Resize-${count}`}"
      aria-describedby="${`title-Resize-${count}`}"
    >
      <title id="${`title-Resize-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Resize-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.571 4H5.429A1.428 1.428 0 004 5.429v37.142A1.428 1.428 0 005.429 44h37.142A1.428 1.428 0 0044 42.571V5.429A1.428 1.428 0 0042.571 4zM40 40H24V28.041l6.877-6.878 3.416 3.416A1 1 0 0036 23.872V12H24.129a1 1 0 00-.707 1.707l3.415 3.416L19.959 24H8V8h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
