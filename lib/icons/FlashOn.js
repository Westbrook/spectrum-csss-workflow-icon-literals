import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FlashOn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Flash On',
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
      aria-labelledby="${`title-FlashOn-${count}`}"
      aria-describedby="${`title-FlashOn-${count}`}"
    >
      <title id="${`title-FlashOn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FlashOn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M17.387 2h16.078a1 1 0 01.835 1.555L24.667 18h11.14a1 1 0 01.755 1.656L12.189 47.734a.5.5 0 01-.846-.5L19.333 26h-9.279a1 1 0 01-.949-1.316l7.334-22A1 1 0 0117.387 2z"
        fill="currentColor"
      />
    </svg>
  `;
};
