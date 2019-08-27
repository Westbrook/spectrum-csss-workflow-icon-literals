import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Project = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Project',
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
      aria-labelledby="${`title-Project-${count}`}"
      aria-describedby="${`title-Project-${count}`}"
    >
      <title id="${`title-Project-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Project-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zM42 14H4v26a2 2 0 002 2h36a2 2 0 002-2V16a2 2 0 00-2-2zM14 37a1 1 0 01-1 1h-2a1 1 0 01-1-1V19a1 1 0 011-1h2a1 1 0 011 1zm8 0a1 1 0 01-1 1h-2a1 1 0 01-1-1V27a1 1 0 011-1h2a1 1 0 011 1zm8 0a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1h2a1 1 0 011 1zm8 0a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1z"
      />
    </svg>
  `;
};
