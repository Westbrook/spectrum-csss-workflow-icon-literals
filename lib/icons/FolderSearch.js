import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderSearch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Search',
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
      aria-labelledby="${`title-FolderSearch-${count}`}"
      aria-describedby="${`title-FolderSearch-${count}`}"
    >
      <title id="${`title-FolderSearch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderSearch-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zm-.483 26.981A14 14 0 0144 25.256V16a2 2 0 00-2-2H4v26a2 2 0 002 2h16.059a13.963 13.963 0 01-4.442-10.219z"
      />
      <path
        d="M47.315 44.084l-7.161-7.161a10.1 10.1 0 10-3.394 3.394l7.161 7.161c.469.469 2.5.89 3.395 0a2.444 2.444 0 00-.001-3.394zm-21.9-12.3a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.198-6.202z"
      />
    </svg>
  `;
};
