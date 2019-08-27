import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const WebPages = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Web Pages',
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
      aria-labelledby="${`title-WebPages-${count}`}"
      aria-describedby="${`title-WebPages-${count}`}"
    >
      <title id="${`title-WebPages-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-WebPages-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 14H12a2 2 0 00-2 2v26a2 2 0 002 2h32a2 2 0 002-2V16a2 2 0 00-2-2zm-2 26H14V22h28z"
      />
      <path d="M6 10h32V6a2 2 0 00-2-2H4a2 2 0 00-2 2v26a2 2 0 002 2h2z" />
      <path
        d="M44 14H12a2 2 0 00-2 2v26a2 2 0 002 2h32a2 2 0 002-2V16a2 2 0 00-2-2zm-2 26H14V22h28z"
      />
      <path d="M6 10h32V6a2 2 0 00-2-2H4a2 2 0 00-2 2v26a2 2 0 002 2h2z" />
    </svg>
  `;
};
