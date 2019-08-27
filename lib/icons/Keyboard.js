import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Keyboard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Keyboard',
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
      aria-labelledby="${`title-Keyboard-${count}`}"
      aria-describedby="${`title-Keyboard-${count}`}"
    >
      <title id="${`title-Keyboard-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Keyboard-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1" ry="1" width="26" x="10" y="26" />
      <rect height="6" rx="1" ry="1" width="8" y="26" />
      <rect height="6" rx="1" ry="1" width="8" x="38" y="26" />
      <rect height="6" rx="1" ry="1" width="10" y="18" />
      <rect height="6" rx="1" ry="1" width="10" x="36" y="18" />
      <rect height="6" rx="1" ry="1" width="6" y="10" />
      <rect height="6" rx="1" ry="1" width="6" x="12" y="18" />
      <rect height="6" rx="1" ry="1" width="6" x="20" y="18" />
      <rect height="6" rx="1" ry="1" width="6" x="28" y="18" />
      <rect height="6" rx="1" ry="1" width="6" x="8" y="10" />
      <rect height="6" rx="1" ry="1" width="6" x="16" y="10" />
      <rect height="6" rx="1" ry="1" width="6" x="24" y="10" />
      <rect height="6" rx="1" ry="1" width="6" x="32" y="10" />
      <rect height="6" rx="1" ry="1" width="6" x="40" y="10" />
    </svg>
  `;
};
