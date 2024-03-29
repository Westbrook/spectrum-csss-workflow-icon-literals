import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderArchive = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Archive',
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
      aria-labelledby="${`title-FolderArchive-${count}`}"
      aria-describedby="${`title-FolderArchive-${count}`}"
    >
      <title id="${`title-FolderArchive-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderArchive-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zM24 37a5 5 0 01-2-4v-2a5 5 0 015-5h17V16a2 2 0 00-2-2H4v26a2 2 0 002 2h18z"
      />
      <path
        d="M47 34H27a1 1 0 01-1-1v-2a1 1 0 011-1h20a1 1 0 011 1v2a1 1 0 01-1 1zm-1 2v11a1 1 0 01-1 1H29a1 1 0 01-1-1V36zm-6 6v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 001-1z"
      />
    </svg>
  `;
};
