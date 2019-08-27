import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Crop = ({ width = 24, height = 24, hidden = false, title = 'Crop', desc } = {}) => {
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
      aria-labelledby="${`title-Crop-${count}`}"
      aria-describedby="${`title-Crop-${count}`}"
    >
      <title id="${`title-Crop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Crop-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 32H16V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v6H4a2 2 0 00-2 2v2a2 2 0 002 2h6v20a2 2 0 002 2h20v6a2 2 0 002 2h2a2 2 0 002-2v-6h6a2 2 0 002-2v-2a2 2 0 00-2-2z"
      />
      <path d="M32 28h6V12a2 2 0 00-2-2H20v6h12z" />
    </svg>
  `;
};
