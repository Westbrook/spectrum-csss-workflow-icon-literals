import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileCSV = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File CS V',
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
      aria-labelledby="${`title-FileCSV-${count}`}"
      aria-describedby="${`title-FileCSV-${count}`}"
    >
      <title id="${`title-FileCSV-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileCSV-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zM12.914 40a.838.838 0 01-.914-.838v-.385a.751.751 0 01.527-.777c1.643-.289 3.621-1.463 3.621-3.037A5 5 0 1122 30.038c0 6.597-4.9 9.58-9.086 9.962z"
      />
    </svg>
  `;
};
