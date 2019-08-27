import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Folder = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder',
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
      aria-labelledby="${`title-Folder-${count}`}"
      aria-describedby="${`title-Folder-${count}`}"
    >
      <title id="${`title-Folder-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Folder-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 10H27.266l-4.844-4.832A4 4 0 0019.6 4H6a4 4 0 00-4 4v32a2 2 0 002 2h40a2 2 0 002-2V12a2 2 0 00-2-2zM19.6 8l6.015 6H6V8z"
        fill="currentColor"
      />
    </svg>
  `;
};
