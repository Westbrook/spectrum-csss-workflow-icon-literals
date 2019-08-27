import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Organize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Organize',
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
      aria-labelledby="${`title-Organize-${count}`}"
      aria-describedby="${`title-Organize-${count}`}"
    >
      <title id="${`title-Organize-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Organize-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zM42 14H4v26a2 2 0 002 2h36a2 2 0 002-2V16a2 2 0 00-2-2zm-26 5a1 1 0 011-1h18a1 1 0 011 1v2a1 1 0 01-1 1H17a1 1 0 01-1-1zm-4 18a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1zm0-8a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1zm0-8a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1zm22 16a1 1 0 01-1 1H17a1 1 0 01-1-1v-2a1 1 0 011-1h16a1 1 0 011 1zm6-8a1 1 0 01-1 1H17a1 1 0 01-1-1v-2a1 1 0 011-1h22a1 1 0 011 1z"
      />
    </svg>
  `;
};
