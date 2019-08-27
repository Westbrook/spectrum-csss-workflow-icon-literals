import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ConfidenceOne = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Confidence One',
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
      aria-labelledby="${`title-ConfidenceOne-${count}`}"
      aria-describedby="${`title-ConfidenceOne-${count}`}"
    >
      <title id="${`title-ConfidenceOne-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ConfidenceOne-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="16" rx="2" ry="2" width="8" y="28" />
      <path
        d="M20 42a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2zm12 0a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2zm12 0a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2z"
      />
    </svg>
  `;
};
