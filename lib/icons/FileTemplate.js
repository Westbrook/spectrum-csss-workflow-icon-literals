import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileTemplate = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Template',
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
      aria-labelledby="${`title-FileTemplate-${count}`}"
      aria-describedby="${`title-FileTemplate-${count}`}"
    >
      <title id="${`title-FileTemplate-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileTemplate-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-6 19a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h6a1 1 0 011 1zm0-12a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1h6a1 1 0 011 1zm0-12a1 1 0 01-1 1h-6a1 1 0 01-1-1V9a1 1 0 011-1h6a1 1 0 011 1z"
      />
    </svg>
  `;
};
