import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Revert = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Revert',
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
      aria-labelledby="${`title-Revert-${count}`}"
      aria-describedby="${`title-Revert-${count}`}"
    >
      <title id="${`title-Revert-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Revert-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.5 28H18a1 1 0 001-1.007.978.978 0 00-.295-.7l-4.536-4.536a14.067 14.067 0 0111.585-6.013A12.27 12.27 0 0137.967 27.1a.988.988 0 001 .9l4.011-.008a.992.992 0 001-1.029A18.268 18.268 0 0025.756 9.744a19.76 19.76 0 00-15.877 7.721l-4.172-4.172a.978.978 0 00-.7-.295A1 1 0 004 14v13.5a.5.5 0 00.5.5z"
      />
      <rect height="4" rx="1" ry="1" width="40" x="4" y="34" />
    </svg>
  `;
};
