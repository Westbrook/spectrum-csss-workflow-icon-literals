import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MapView = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Map View',
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
      aria-labelledby="${`title-MapView-${count}`}"
      aria-describedby="${`title-MapView-${count}`}"
    >
      <title id="${`title-MapView-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MapView-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M33.151 4.486l-9.386 4.693-9.33-4.665a1.241 1.241 0 00-1.105 0L4.683 8.838A1.234 1.234 0 004 9.943v31.826a1.236 1.236 0 001.788 1.105l8.094-4.047 9.33 4.664a1.235 1.235 0 001.105 0l9.33-4.664 10.659 4.263A1.235 1.235 0 0046 41.943V10.016a1.235 1.235 0 00-.777-1.147L34.162 4.444a1.238 1.238 0 00-1.011.042zM24 41.328l-10.118-5.174V6.827L24 12zm20-.928l-10.353-4.044V6.709L44 10.75z"
        fill="currentColor"
      />
    </svg>
  `;
};
