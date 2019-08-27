import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LinkOutLight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Link Out Light',
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
      aria-labelledby="${`title-LinkOutLight-${count}`}"
      aria-describedby="${`title-LinkOutLight-${count}`}"
    >
      <title id="${`title-LinkOutLight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LinkOutLight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 24.5V38H8V8h15.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H5a1 1 0 00-1 1v36a1 1 0 001 1h38a1 1 0 001-1V24.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5z"
      />
      <path
        d="M30.241 4a1.008 1.008 0 00-.655 1.716l4.228 4.228-9.842 9.842a.5.5 0 000 .707l3.535 3.535a.5.5 0 00.707 0l9.842-9.842 4.218 4.214a1 1 0 001.706-.655V4z"
      />
    </svg>
  `;
};
