import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderDelete = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Delete',
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
      aria-labelledby="${`title-FolderDelete-${count}`}"
      aria-describedby="${`title-FolderDelete-${count}`}"
    >
      <title id="${`title-FolderDelete-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderDelete-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zm2 31.2A15.879 15.879 0 0144 22.275V16a2 2 0 00-2-2H4v26a2 2 0 002 2h15.28a15.844 15.844 0 01-1.18-6z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
