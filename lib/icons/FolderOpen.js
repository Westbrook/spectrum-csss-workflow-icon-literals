import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderOpen = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Open',
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
      aria-labelledby="${`title-FolderOpen-${count}`}"
      aria-describedby="${`title-FolderOpen-${count}`}"
    >
      <title id="${`title-FolderOpen-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderOpen-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.225 18H40v-6a2 2 0 00-2-2H23.266l-4.844-4.832A4 4 0 0015.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h34.559a2 2 0 001.9-1.368l6.667-20A2 2 0 0045.225 18zM6 8h9.6l6.015 6H36v4H13.441a2 2 0 00-1.9 1.368L6 36z"
        fill="currentColor"
      />
    </svg>
  `;
};
