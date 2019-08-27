import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Export = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Export',
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
      aria-labelledby="${`title-Export-${count}`}"
      aria-describedby="${`title-Export-${count}`}"
    >
      <title id="${`title-Export-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Export-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.854 23.646L33.707 14.3A1 1 0 0032 15v5h-9a1 1 0 00-1 1v6a1 1 0 001 1h9v5a1 1 0 001.707.707l9.147-9.353a.5.5 0 000-.708z"
      />
      <path
        d="M40 42v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H8V8h28v3a1 1 0 001 1h2a1 1 0 001-1V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h32a2 2 0 002-2z"
      />
    </svg>
  `;
};
