import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Exposure = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Exposure',
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
      aria-labelledby="${`title-Exposure-${count}`}"
      aria-describedby="${`title-Exposure-${count}`}"
    >
      <title id="${`title-Exposure-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Exposure-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M9.286 10.65A19.662 19.662 0 005.052 30h10.654zM32.1 5.855a19.7 19.7 0 00-19.562 1.9l3.287 9.908zm11.728 19.581c.037-.475.072-.951.072-1.436a19.84 19.84 0 00-8.032-15.935l-8.084 5.866zm-8.821-1.404l-6.226 19.256A19.9 19.9 0 0043.02 29.779zM24.386 43.88L27.58 34H6.815A19.875 19.875 0 0024 43.9c.13 0 .258-.011.386-.02z"
      />
    </svg>
  `;
};
