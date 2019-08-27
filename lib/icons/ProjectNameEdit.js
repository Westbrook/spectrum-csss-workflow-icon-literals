import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ProjectNameEdit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Project Name Edit',
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
      aria-labelledby="${`title-ProjectNameEdit-${count}`}"
      aria-describedby="${`title-ProjectNameEdit-${count}`}"
    >
      <title id="${`title-ProjectNameEdit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ProjectNameEdit-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 24H26a2 2 0 00-2 2v5a1 1 0 001 1h2a1 1 0 001-1v-3h4v14h-1a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1v-2a1 1 0 00-1-1h-1V28h4v3a1 1 0 001 1h2a1 1 0 001-1v-5a2 2 0 00-2-2z"
      />
      <path d="M6 8h36v12h4V5a1 1 0 00-1-1H3a1 1 0 00-1 1v30a1 1 0 001 1h17v-4H6z" />
    </svg>
  `;
};
