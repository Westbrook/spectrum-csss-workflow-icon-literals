import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Import = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Import',
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
      aria-labelledby="${`title-Import-${count}`}"
      aria-describedby="${`title-Import-${count}`}"
    >
      <title id="${`title-Import-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Import-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.854 23.646L15.707 14.3A1 1 0 0014 15v5H5a1 1 0 00-1 1v6a1 1 0 001 1h9v5a1 1 0 001.707.707l9.147-9.353a.5.5 0 000-.708z"
      />
      <path
        d="M8 6v5a1 1 0 001 1h2a1 1 0 001-1V8h28v32H12v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v5a2 2 0 002 2h32a2 2 0 002-2V6a2 2 0 00-2-2H10a2 2 0 00-2 2z"
      />
    </svg>
  `;
};
