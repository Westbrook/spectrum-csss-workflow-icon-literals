import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ModernGridView = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Modern Grid View',
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
      aria-labelledby="${`title-ModernGridView-${count}`}"
      aria-describedby="${`title-ModernGridView-${count}`}"
    >
      <title id="${`title-ModernGridView-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ModernGridView-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="18" rx="2" ry="2" width="24" x="4" y="4" />
      <rect height="18" rx="2" ry="2" width="12" x="32" y="4" />
      <rect height="18" rx="2" ry="2" width="12" x="4" y="26" />
      <rect height="18" rx="2" ry="2" width="24" x="20" y="26" />
    </svg>
  `;
};
