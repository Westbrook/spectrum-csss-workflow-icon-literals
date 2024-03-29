import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageCheckedOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Checked Out',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-ImageCheckedOut-${count}`}"
      aria-describedby="${`title-ImageCheckedOut-${count}`}"
    >
      <title id="${`title-ImageCheckedOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageCheckedOut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm6 14.48a.594.594 0 01-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.336-5.336-2.529-2.528A.594.594 0 0133.52 30h8.126a.354.354 0 01.354.354z"
      />
      <path
        d="M25.542 23.909l-8.245-8.245a2.638 2.638 0 00-3.73 0L6 23.231V4h36v17.174a15.97 15.97 0 014 2.347V2a2 2 0 00-2-2H4a2 2 0 00-2 2v32a2 2 0 002 2h16a15.95 15.95 0 015.542-12.091z"
      />
      <path d="M35.123 7.424a3.7 3.7 0 103.7 3.7 3.7 3.7 0 00-3.7-3.7z" />
    </svg>
  `;
};
