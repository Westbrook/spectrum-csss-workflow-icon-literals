import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeHorizontalCenter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Horizontal Center',
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
      aria-labelledby="${`title-DistributeHorizontalCenter-${count}`}"
      aria-describedby="${`title-DistributeHorizontalCenter-${count}`}"
    >
      <title id="${`title-DistributeHorizontalCenter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeHorizontalCenter-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 14h-2V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v11h-2a2 2 0 00-2 2v16a2 2 0 002 2h2v11a1 1 0 001 1h2a1 1 0 001-1V34h2a2 2 0 002-2V16a2 2 0 00-2-2zM18 8h-2V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v5h-2a2 2 0 00-2 2v28a2 2 0 002 2h2v5a1 1 0 001 1h2a1 1 0 001-1v-5h2a2 2 0 002-2V10a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
