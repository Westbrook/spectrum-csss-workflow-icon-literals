import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TreeCollapse = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tree Collapse',
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
      aria-labelledby="${`title-TreeCollapse-${count}`}"
      aria-describedby="${`title-TreeCollapse-${count}`}"
    >
      <title id="${`title-TreeCollapse-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TreeCollapse-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 6H8a2 2 0 00-2 2v32a2 2 0 002 2h32a2 2 0 002-2V8a2 2 0 00-2-2zM15 26a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1v2a1 1 0 01-1 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
