import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeLeftEdge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Left Edge',
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
      aria-labelledby="${`title-DistributeLeftEdge-${count}`}"
      aria-describedby="${`title-DistributeLeftEdge-${count}`}"
    >
      <title id="${`title-DistributeLeftEdge-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeLeftEdge-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 14H32V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v42a1 1 0 001 1h2a1 1 0 001-1V34h10a2 2 0 002-2V16a2 2 0 00-2-2zM18 8h-8V3a1 1 0 00-1-1H7a1 1 0 00-1 1v42a1 1 0 001 1h2a1 1 0 001-1v-5h8a2 2 0 002-2V10a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
