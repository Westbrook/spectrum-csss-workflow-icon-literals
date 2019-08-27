import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VideoFilled = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Video Filled',
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
      aria-labelledby="${`title-VideoFilled-${count}`}"
      aria-describedby="${`title-VideoFilled-${count}`}"
    >
      <title id="${`title-VideoFilled-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VideoFilled-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM10 41a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1zm24 14a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm8 16a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
