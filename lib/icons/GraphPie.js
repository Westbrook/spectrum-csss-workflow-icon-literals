import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphPie = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Pie',
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
      aria-labelledby="${`title-GraphPie-${count}`}"
      aria-describedby="${`title-GraphPie-${count}`}"
    >
      <title id="${`title-GraphPie-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphPie-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 24a20 20 0 0016.86 19.753 1 1 0 001.14-1V25.591a1 1 0 00-.439-.828l-14.2-9.624a1 1 0 00-1.462.378A19.837 19.837 0 004 24zm5.619-12.165l10.82 7.335A1 1 0 0022 18.342V5.251a1.008 1.008 0 00-1.143-1A19.934 19.934 0 009.43 10.33a1 1 0 00.189 1.505zM27.14 4.247a1 1 0 00-1.14 1v17.692l.051.035-.051.076v19.7a1 1 0 001.14 1 20 20 0 000-39.505z"
        fill="currentColor"
      />
    </svg>
  `;
};
