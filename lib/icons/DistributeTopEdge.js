import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeTopEdge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Top Edge',
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
      aria-labelledby="${`title-DistributeTopEdge-${count}`}"
      aria-describedby="${`title-DistributeTopEdge-${count}`}"
    >
      <title id="${`title-DistributeTopEdge-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeTopEdge-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M2 29v2a1 1 0 001 1h5v8a2 2 0 002 2h28a2 2 0 002-2v-8h5a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1zM2 5v2a1 1 0 001 1h11v10a2 2 0 002 2h16a2 2 0 002-2V8h11a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1z"
      />
    </svg>
  `;
};
