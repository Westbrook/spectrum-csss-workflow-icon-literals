import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Outline',
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
      aria-labelledby="${`title-FolderOutline-${count}`}"
      aria-describedby="${`title-FolderOutline-${count}`}"
    >
      <title id="${`title-FolderOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 10H27.266l-4.844-4.832A4 4 0 0019.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h40a2 2 0 002-2V12a2 2 0 00-2-2zm-2 28H6V14h36z"
        fill="currentColor"
      />
    </svg>
  `;
};
