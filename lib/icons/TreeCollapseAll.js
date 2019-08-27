import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TreeCollapseAll = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tree Collapse All',
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
      aria-labelledby="${`title-TreeCollapseAll-${count}`}"
      aria-describedby="${`title-TreeCollapseAll-${count}`}"
    >
      <title id="${`title-TreeCollapseAll-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TreeCollapseAll-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M8 10a2 2 0 012-2h26V6a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h2z" />
      <path
        d="M42 12H14a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V14a2 2 0 00-2-2zM19 30a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1v2a1 1 0 01-1 1z"
      />
    </svg>
  `;
};
