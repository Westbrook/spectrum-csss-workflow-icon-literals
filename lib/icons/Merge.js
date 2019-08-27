import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Merge = ({ width = 24, height = 24, hidden = false, title = 'Merge', desc } = {}) => {
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
      aria-labelledby="${`title-Merge-${count}`}"
      aria-describedby="${`title-Merge-${count}`}"
    >
      <title id="${`title-Merge-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Merge-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.856 22.649L37.332 14.2a.787.787 0 00-.527-.2.8.8 0 00-.8.8V20H26V10a2 2 0 00-2-2H5a1 1 0 00-1 1v4a1 1 0 001 1h15v18H5a1 1 0 00-1 1v4a1 1 0 001 1h19a2 2 0 002-2V26h10v5.2a.8.8 0 00.8.8.787.787 0 00.527-.2l8.524-8.445a.5.5 0 000-.7z"
        fill="currentColor"
      />
    </svg>
  `;
};
