import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Dropdown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Dropdown',
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
      aria-labelledby="${`title-Dropdown-${count}`}"
      aria-describedby="${`title-Dropdown-${count}`}"
    >
      <title id="${`title-Dropdown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Dropdown-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 2H6a2 2 0 00-2 2v8a2 2 0 002 2h36a2 2 0 002-2V4a2 2 0 00-2-2zm-7 9.5l-4.317-4.68a.5.5 0 01.385-.82h7.864a.5.5 0 01.385.82zm7 6.5H6a2 2 0 00-2 2v24a2 2 0 002 2h36a2 2 0 002-2V20a2 2 0 00-2-2zM8 23a1 1 0 011-1h30a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1zm32 18a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h30a1 1 0 011 1zm-4-8a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h26a1 1 0 011 1z"
      />
    </svg>
  `;
};
