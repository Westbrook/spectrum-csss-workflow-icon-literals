import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Stage = ({ width = 24, height = 24, hidden = false, title = 'Stage', desc } = {}) => {
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
      aria-labelledby="${`title-Stage-${count}`}"
      aria-describedby="${`title-Stage-${count}`}"
    >
      <title id="${`title-Stage-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Stage-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M11.942 33.941V24a26.637 26.637 0 0010-20H6.059a2 2 0 00-2 2v29.941h5.883a2 2 0 002-2z"
      />
      <path
        d="M33.824 39V21.552l1.095-1.094a4.518 4.518 0 10-2.535-2.642L21.689 28.91a.916.916 0 000 1.295l1.295 1.3a.916.916 0 001.294 0l5.885-6.287V39H4v3a2 2 0 002 2h36a2 2 0 002-2v-3z"
      />
    </svg>
  `;
};
