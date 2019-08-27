import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileSingleWebPage = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Single Web Page',
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
      aria-labelledby="${`title-FileSingleWebPage-${count}`}"
      aria-describedby="${`title-FileSingleWebPage-${count}`}"
    >
      <title id="${`title-FileSingleWebPage-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileSingleWebPage-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M14 38h20v-8H14zm12-18a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm10 18a2 2 0 01-2 2H14a2 2 0 01-2-2V26a2 2 0 012-2h20a2 2 0 012 2z"
      />
    </svg>
  `;
};
