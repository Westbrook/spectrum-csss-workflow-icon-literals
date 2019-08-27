import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DesktopAndMobile = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Desktop And Mobile',
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
      aria-labelledby="${`title-DesktopAndMobile-${count}`}"
      aria-describedby="${`title-DesktopAndMobile-${count}`}"
    >
      <title id="${`title-DesktopAndMobile-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DesktopAndMobile-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 28H4V8h34v2h4V6a2 2 0 00-2-2H2a2 2 0 00-2 2v24a2 2 0 002 2h14v4a2.006 2.006 0 01-2 2h-3a1 1 0 00-1 1v2a1 1 0 001 1h13z"
      />
      <path
        d="M46 14H30a2 2 0 00-2 2v30a2 2 0 002 2h16a2 2 0 002-2V16a2 2 0 00-2-2zm-9 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 31.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm8-5.1H30V20h16z"
      />
    </svg>
  `;
};
