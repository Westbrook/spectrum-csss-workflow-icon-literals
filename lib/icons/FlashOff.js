import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlashOff = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flash Off',
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
      aria-labelledby="${`title-FlashOff-${count}`}"
      aria-describedby="${`title-FlashOff-${count}`}"
    >
      <title id="${`title-FlashOff-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlashOff-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M31.992 24.921l4.57-5.265A1 1 0 0035.807 18H25.07zm-7.164-7.163L34.3 3.555A1 1 0 0033.465 2H17.387a1 1 0 00-.948.684L14.768 7.7zm-5.605 8.535l-7.88 20.937a.5.5 0 00.846.5l13.232-15.239zM11.232 18.3l-2.127 6.384A1 1 0 0010.054 26h8.876z"
      />
      <rect
        height="56.215"
        rx="1"
        ry="1"
        transform="rotate(-45 23.875 23.875)"
        width="4"
        x="21.875"
        y="-4.232"
      />
    </svg>
  `;
};
