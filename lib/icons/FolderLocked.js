import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderLocked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Locked',
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
      aria-labelledby="${`title-FolderLocked-${count}`}"
      aria-describedby="${`title-FolderLocked-${count}`}"
    >
      <title id="${`title-FolderLocked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderLocked-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zM20 33a5 5 0 012.037-4.025A13.973 13.973 0 0144 18.535V16a2 2 0 00-2-2H4v26a2 2 0 002 2h14z"
      />
      <path
        d="M46 32v-1.609c0-5.186-4.205-10.061-9.382-10.372A10 10 0 0026 30v2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V34a2 2 0 00-2-2zm-16-2a6 6 0 0112 0v2H30zm8 10.222V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.778a3 3 0 114 0z"
      />
    </svg>
  `;
};
