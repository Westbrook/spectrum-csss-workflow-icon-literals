import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShareAndroid = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Share Android',
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
      aria-labelledby="${`title-ShareAndroid-${count}`}"
      aria-describedby="${`title-ShareAndroid-${count}`}"
    >
      <title id="${`title-ShareAndroid-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShareAndroid-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M35.95 32.05a5.931 5.931 0 00-4.2 1.735l-14.068-8.207a5.82 5.82 0 000-3.156l14.069-8.207a6 6 0 10-1.52-2.587l-14.047 8.2a5.95 5.95 0 100 8.354l14.047 8.2a5.948 5.948 0 105.719-4.332z"
        fill="currentColor"
      />
    </svg>
  `;
};
