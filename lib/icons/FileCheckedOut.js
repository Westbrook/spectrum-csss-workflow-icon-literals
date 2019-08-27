import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileCheckedOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Checked Out',
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
      aria-labelledby="${`title-FileCheckedOut-${count}`}"
      aria-describedby="${`title-FileCheckedOut-${count}`}"
    >
      <title id="${`title-FileCheckedOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileCheckedOut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm6 14.48a.594.594 0 01-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l5.336-5.336-2.529-2.528A.594.594 0 0133.52 30h8.126a.354.354 0 01.354.354zM26 0v10h10L26 0z"
      />
      <path
        d="M20 36a16 16 0 0116-16v-6H24a2 2 0 01-2-2V0H6a2 2 0 00-2 2v36a2 2 0 002 2h14.524A15.974 15.974 0 0120 36z"
      />
    </svg>
  `;
};
