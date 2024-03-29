import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewDay = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Day',
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
      aria-labelledby="${`title-ViewDay-${count}`}"
      aria-describedby="${`title-ViewDay-${count}`}"
    >
      <title id="${`title-ViewDay-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewDay-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22.332 34c-.216 0-.288-.076-.288-.264v-10.95a13.766 13.766 0 01-3.709 1.325c-.216.037-.288 0-.288-.227v-3.2c0-.188.036-.263.216-.3a16.954 16.954 0 004.937-2.233.913.913 0 01.54-.151h2.06c.143 0 .18.076.18.264v15.472c0 .188-.073.264-.216.264z"
      />
      <path
        d="M45 8h-7V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v32a1 1 0 001 1h42a1 1 0 001-1V9a1 1 0 00-1-1zm-3 30H6V12h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h20v1a1 1 0 001 1h2a1 1 0 001-1v-1h4z"
      />
    </svg>
  `;
};
