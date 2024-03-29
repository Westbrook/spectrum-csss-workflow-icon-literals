import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageMapCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Map Circle',
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
      aria-labelledby="${`title-ImageMapCircle-${count}`}"
      aria-describedby="${`title-ImageMapCircle-${count}`}"
    >
      <title id="${`title-ImageMapCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageMapCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 15.556V7a1 1 0 00-1-1h-8.556a19.713 19.713 0 00-16.888 0H7a1 1 0 00-1 1v8.556a19.709 19.709 0 000 16.888V41a1 1 0 001 1h8.556a19.713 19.713 0 0016.889 0H41a1 1 0 001-1v-8.556a19.709 19.709 0 000-16.888zM34 10h4v4h-4zm-24 0h4v4h-4zm4 28h-4v-4h4zm24 0h-4v-4h4zm-7-8a1 1 0 00-1 1v7.929a15.954 15.954 0 01-12 0V31a1 1 0 00-1-1H9.071a15.96 15.96 0 010-12H17a1 1 0 001-1V9.071a15.954 15.954 0 0112 0V17a1 1 0 001 1h7.929a15.96 15.96 0 010 12z"
        fill="currentColor"
      />
    </svg>
  `;
};
