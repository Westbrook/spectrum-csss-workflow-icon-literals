import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderRemove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Remove',
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
      aria-labelledby="${`title-FolderRemove-${count}`}"
      aria-describedby="${`title-FolderRemove-${count}`}"
    >
      <title id="${`title-FolderRemove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderRemove-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zm2 31.3A15.9 15.9 0 0144 22.357V16a2 2 0 00-2-2H4v26a2 2 0 002 2h15.231a15.858 15.858 0 01-1.131-5.9z"
      />
      <path
        d="M36.1 24.2A11.9 11.9 0 1048 36.1a11.9 11.9 0 00-11.9-11.9zm8.132 17.2a.5.5 0 010 .707l-2.122 2.124a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.121a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3z"
      />
    </svg>
  `;
};
