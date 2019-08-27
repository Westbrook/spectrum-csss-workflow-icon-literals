import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Group = ({ width = 24, height = 24, hidden = false, title = 'Group', desc } = {}) => {
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
      aria-labelledby="${`title-Group-${count}`}"
      aria-describedby="${`title-Group-${count}`}"
    >
      <title id="${`title-Group-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Group-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 10V6a2 2 0 00-2-2h-4a2 2 0 00-2 2H12a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2v24a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2h24a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2V12a2 2 0 002-2zm-6 26a2 2 0 00-2 2H12a2 2 0 00-2-2V12a2 2 0 002-2h24a2 2 0 002 2z"
      />
      <path d="M30 18v-2a2 2 0 00-2-2H16a2 2 0 00-2 2v12a2 2 0 002 2h2V18z" />
      <path d="M32 20H20v12a2 2 0 002 2h10a2 2 0 002-2V22a2 2 0 00-2-2z" />
    </svg>
  `;
};
