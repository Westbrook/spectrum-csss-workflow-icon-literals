import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LocationBasedDate = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Location Based Date',
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
      aria-labelledby="${`title-LocationBasedDate-${count}`}"
      aria-describedby="${`title-LocationBasedDate-${count}`}"
    >
      <title id="${`title-LocationBasedDate-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LocationBasedDate-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 19v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1z" />
      <path
        d="M45 4h-7V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H18V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H7a1 1 0 00-1 1v6.277a15.569 15.569 0 014-1.057V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h16v1a1 1 0 001 1h2a1 1 0 001-1V8h4v24H26.107a44.988 44.988 0 01-1.943 4H45a1 1 0 001-1V5a1 1 0 00-1-1z"
      />
      <path
        d="M12 14.078A11.678 11.678 0 00.322 25.756C.322 32.205 12 46.922 12 46.922s11.678-14.717 11.678-21.166A11.678 11.678 0 0012 14.078zm0 16.2a4.525 4.525 0 114.525-4.525A4.525 4.525 0 0112 30.281z"
      />
    </svg>
  `;
};
