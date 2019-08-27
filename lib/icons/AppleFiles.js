import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AppleFiles = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Apple Files',
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
      aria-labelledby="${`title-AppleFiles-${count}`}"
      aria-describedby="${`title-AppleFiles-${count}`}"
    >
      <title id="${`title-AppleFiles-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AppleFiles-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 9.277l-3.2-2.554A3.3 3.3 0 0012.842 6H5.3A3.3 3.3 0 002 9.3v29.4A3.3 3.3 0 005.3 42h37.4a3.3 3.3 0 003.3-3.3V13.3a3.3 3.3 0 00-3.3-3.3H20.158a3.3 3.3 0 01-2.058-.723zM42 18H6v-2a2 2 0 012-2h32a2 2 0 012 2z"
        fill="currentColor"
      />
    </svg>
  `;
};
