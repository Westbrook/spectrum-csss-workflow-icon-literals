import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeBottomEdge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Bottom Edge',
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
      aria-labelledby="${`title-DistributeBottomEdge-${count}`}"
      aria-describedby="${`title-DistributeBottomEdge-${count}`}"
    >
      <title id="${`title-DistributeBottomEdge-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeBottomEdge-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 6v10H3a1 1 0 00-1 1v2a1 1 0 001 1h42a1 1 0 001-1v-2a1 1 0 00-1-1H34V6a2 2 0 00-2-2H16a2 2 0 00-2 2zM8 30v8H3a1 1 0 00-1 1v2a1 1 0 001 1h42a1 1 0 001-1v-2a1 1 0 00-1-1h-5v-8a2 2 0 00-2-2H10a2 2 0 00-2 2z"
      />
    </svg>
  `;
};
