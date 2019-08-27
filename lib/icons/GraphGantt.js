import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphGantt = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Gantt',
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
      aria-labelledby="${`title-GraphGantt-${count}`}"
      aria-describedby="${`title-GraphGantt-${count}`}"
    >
      <title id="${`title-GraphGantt-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphGantt-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1" ry="1" width="8" />
      <rect height="6" rx="1" ry="1" width="18" x="6" y="8" />
      <rect height="6" rx="1" ry="1" width="8" x="10" y="16" />
      <rect height="6" rx="1" ry="1" width="10" x="14" y="24" />
      <rect height="6" rx="1" ry="1" width="20" x="14" y="32" />
      <rect height="6" rx="1" ry="1" width="30" x="18" y="40" />
    </svg>
  `;
};
