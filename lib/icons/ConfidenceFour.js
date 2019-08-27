import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ConfidenceFour = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Confidence Four',
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
      aria-labelledby="${`title-ConfidenceFour-${count}`}"
      aria-describedby="${`title-ConfidenceFour-${count}`}"
    >
      <title id="${`title-ConfidenceFour-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ConfidenceFour-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="16" rx="2" ry="2" width="8" y="28" />
      <rect height="24" rx="2" ry="2" width="8" x="12" y="20" />
      <rect height="32" rx="2" ry="2" width="8" x="24" y="12" />
      <rect height="40" rx="2" ry="2" width="8" x="36" y="4" />
    </svg>
  `;
};
