import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TreeExpand = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tree Expand',
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
      aria-labelledby="${`title-TreeExpand-${count}`}"
      aria-describedby="${`title-TreeExpand-${count}`}"
    >
      <title id="${`title-TreeExpand-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TreeExpand-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 6H8a2 2 0 00-2 2v32a2 2 0 002 2h32a2 2 0 002-2V8a2 2 0 00-2-2zm-7 20h-7v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7h-7a1 1 0 01-1-1v-2a1 1 0 011-1h7v-7a1 1 0 011-1h2a1 1 0 011 1v7h7a1 1 0 011 1v2a1 1 0 01-1 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
