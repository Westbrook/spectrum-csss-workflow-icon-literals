import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderOpenOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Open Outline',
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
      aria-labelledby="${`title-FolderOpenOutline-${count}`}"
      aria-describedby="${`title-FolderOpenOutline-${count}`}"
    >
      <title id="${`title-FolderOpenOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderOpenOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.561 14v-2a2 2 0 00-2-2h-15.3l-4.839-4.832A4 4 0 0017.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h35.937a2 2 0 001.941-1.515l6-24A2 2 0 0045.937 14zm-4 24H6l4-20h33.561z"
        fill="currentColor"
      />
    </svg>
  `;
};
