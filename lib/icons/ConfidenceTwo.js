import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ConfidenceTwo = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Confidence Two',
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
      aria-labelledby="${`title-ConfidenceTwo-${count}`}"
      aria-describedby="${`title-ConfidenceTwo-${count}`}"
    >
      <title id="${`title-ConfidenceTwo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ConfidenceTwo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 42a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2zm-12 0a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2z"
      />
      <rect height="16" rx="2" ry="2" width="8" y="28" />
      <rect height="24" rx="2" ry="2" width="8" x="12" y="20" />
    </svg>
  `;
};
