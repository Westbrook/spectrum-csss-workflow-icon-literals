import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Add',
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
      aria-labelledby="${`title-FolderAdd-${count}`}"
      aria-describedby="${`title-FolderAdd-${count}`}"
    >
      <title id="${`title-FolderAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 20a15.916 15.916 0 0110 3.53V12a2 2 0 00-2-2H27.266l-4.844-4.832A4 4 0 0019.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h17.178A15.979 15.979 0 0136 20zM6 8h13.6l6.015 6H6z"
      />
      <path
        d="M36 24a12 12 0 1012 12 12 12 0 00-12-12zm8 13a1 1 0 01-1 1h-5v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-5a1 1 0 01-1-1v-2a1 1 0 011-1h5v-5a1 1 0 011-1h2a1 1 0 011 1v5h5a1 1 0 011 1z"
      />
    </svg>
  `;
};
