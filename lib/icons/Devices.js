import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Devices = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Devices',
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
      aria-labelledby="${`title-Devices-${count}`}"
      aria-describedby="${`title-Devices-${count}`}"
    >
      <title id="${`title-Devices-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Devices-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22 32H6V8h32v2h4V8a4 4 0 00-4-4H4a4 4 0 00-4 4v24a4 4 0 004 4h18zM3 22.5a2.5 2.5 0 010-5 2.5 2.5 0 110 5z"
      />
      <path
        d="M44 14H28a2 2 0 00-2 2v30a2 2 0 002 2h16a2 2 0 002-2V16a2 2 0 00-2-2zm-9 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 31.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm8-5.1H28V20h16z"
      />
    </svg>
  `;
};
