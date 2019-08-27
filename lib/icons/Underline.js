import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Underline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Underline',
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
      aria-labelledby="${`title-Underline-${count}`}"
      aria-describedby="${`title-Underline-${count}`}"
    >
      <title id="${`title-Underline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Underline-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx=".5" ry=".5" width="28" x="10" y="40" />
      <path
        d="M31.334 4a.667.667 0 00-.667.667v18s.643 8.266-6.667 8.266c-7.278 0-6.667-8.267-6.667-8.267v-18A.667.667 0 0016.667 4h-4a.667.667 0 00-.667.667v18C12 24.549 11.812 36 24 36s12-12.016 12-13.365V4.667A.667.667 0 0035.334 4z"
      />
    </svg>
  `;
};
