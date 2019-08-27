import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const VideoOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Video Outline',
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
      aria-labelledby="${`title-VideoOutline-${count}`}"
      aria-describedby="${`title-VideoOutline-${count}`}"
    >
      <title id="${`title-VideoOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-VideoOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6 4v40h36V4zm6 37a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1H9a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1zm22 31H14V26h20zm0-20H14V6h20zm6 19a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1zm0-10a1 1 0 01-1 1h-2a1 1 0 01-1-1V7a1 1 0 011-1h2a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
