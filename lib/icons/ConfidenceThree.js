import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ConfidenceThree = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Confidence Three',
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
      aria-labelledby="${`title-ConfidenceThree-${count}`}"
      aria-describedby="${`title-ConfidenceThree-${count}`}"
    >
      <title id="${`title-ConfidenceThree-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ConfidenceThree-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M44 42a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2z" />
      <rect height="16" rx="2" ry="2" width="8" y="28" />
      <rect height="24" rx="2" ry="2" width="8" x="12" y="20" />
      <rect height="32" rx="2" ry="2" width="8" x="24" y="12" />
    </svg>
  `;
};
