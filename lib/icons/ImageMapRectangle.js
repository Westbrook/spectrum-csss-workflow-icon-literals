import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageMapRectangle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Map Rectangle',
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
      aria-labelledby="${`title-ImageMapRectangle-${count}`}"
      aria-describedby="${`title-ImageMapRectangle-${count}`}"
    >
      <title id="${`title-ImageMapRectangle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageMapRectangle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43 16a1 1 0 001-1V5a1 1 0 00-1-1H33a1 1 0 00-1 1v3H16V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3v16H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3h16v3a1 1 0 001 1h10a1 1 0 001-1V33a1 1 0 00-1-1h-3V16zM8 8h4v4H8zm4 32H8v-4h4zm20-7v3H16v-3a1 1 0 00-1-1h-3V16h3a1 1 0 001-1v-3h16v3a1 1 0 001 1h3v16h-3a1 1 0 00-1 1zm8 7h-4v-4h4zm-4-28V8h4v4z"
        fill="currentColor"
      />
    </svg>
  `;
};
