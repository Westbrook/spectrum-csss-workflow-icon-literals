import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BackAndroid = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Back Android',
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
      aria-labelledby="${`title-BackAndroid-${count}`}"
      aria-describedby="${`title-BackAndroid-${count}`}"
    >
      <title id="${`title-BackAndroid-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BackAndroid-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47 22H11.029L26.121 6.908a1 1 0 000-1.414L24.707 4.08a1 1 0 00-1.414 0L4.08 23.293a1 1 0 000 1.414L23.293 43.92a1 1 0 001.414 0l1.414-1.414a1 1 0 000-1.414L11.029 26H47a1 1 0 001-1v-2a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  `;
};
