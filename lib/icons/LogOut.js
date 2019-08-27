import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LogOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Log Out',
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
      aria-labelledby="${`title-LogOut-${count}`}"
      aria-describedby="${`title-LogOut-${count}`}"
    >
      <title id="${`title-LogOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LogOut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M33.749 7.759l-.93 1.55a1 1 0 00.314 1.339 16.2 16.2 0 11-18.258 0 1 1 0 00.313-1.338l-.926-1.546a1.012 1.012 0 00-1.418-.334 20 20 0 1022.315 0 1 1 0 00-1.41.329z"
      />
      <rect height="20" rx="1" ry="1" width="4" x="22" y="2" />
    </svg>
  `;
};
