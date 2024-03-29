import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Compass = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Compass',
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
      aria-labelledby="${`title-Compass-${count}`}"
      aria-describedby="${`title-Compass-${count}`}"
    >
      <title id="${`title-Compass-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Compass-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M2 26h2a1.894 1.894 0 00.2-.04 19.743 19.743 0 002.248 7.379l2.492-3.69A16.064 16.064 0 0129.577 8.913l3.7-2.5A19.749 19.749 0 0025.96 4.2 1.894 1.894 0 0026 4V2a2 2 0 00-4 0v2a1.894 1.894 0 00.04.2A19.9 19.9 0 004.2 22.04 1.894 1.894 0 004 22H2a2 2 0 000 4zm44-4h-2a1.894 1.894 0 00-.2.04 19.76 19.76 0 00-2.215-7.317l-2.5 3.7a16.064 16.064 0 01-20.733 20.638l-3.691 2.492A19.749 19.749 0 0022.04 43.8a1.894 1.894 0 00-.04.2v2a2 2 0 004 0v-2a1.894 1.894 0 00-.04-.2A19.9 19.9 0 0043.8 25.96a1.894 1.894 0 00.2.04h2a2 2 0 000-4zm-26.391-1.006L4.23 43.77l22.776-15.379a6.009 6.009 0 001.615-1.615L44 4 21.224 19.379a6.009 6.009 0 00-1.615 1.615zm4.4 6.63a3.635 3.635 0 113.634-3.635 3.634 3.634 0 01-3.632 3.635z"
      />
    </svg>
  `;
};
