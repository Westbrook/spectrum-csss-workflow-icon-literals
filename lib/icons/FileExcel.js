import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileExcel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Excel',
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
      aria-labelledby="${`title-FileExcel-${count}`}"
      aria-describedby="${`title-FileExcel-${count}`}"
    >
      <title id="${`title-FileExcel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileExcel-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M40 20v22a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2h14v14a2 2 0 002 2zm-9.237 20l-4.739-8.177L30.541 24h-5.167L23.4 28.351 21.333 24h-5.169l4.464 7.91L16 40h5.164l2.095-4.611L25.564 40z"
      />
    </svg>
  `;
};
