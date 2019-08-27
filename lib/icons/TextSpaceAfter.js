import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextSpaceAfter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Space After',
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
      aria-labelledby="${`title-TextSpaceAfter-${count}`}"
      aria-describedby="${`title-TextSpaceAfter-${count}`}"
    >
      <title id="${`title-TextSpaceAfter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextSpaceAfter-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="28" x="16" y="4" />
      <rect height="4" rx="1" ry="1" width="28" x="16" y="12" />
      <rect height="4" rx="1" ry="1" width="28" x="16" y="20" />
      <path
        d="M44 43V29a1 1 0 00-1-1H17a1 1 0 00-1 1v14a1 1 0 001 1h26a1 1 0 001-1zm-4-3H20v-8h20zM4.864 45.685A.5.5 0 014 45.341V26.659a.5.5 0 01.864-.343L14 36z"
      />
    </svg>
  `;
};
