import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeSpaceVert = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Space Vert',
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
      aria-labelledby="${`title-DistributeSpaceVert-${count}`}"
      aria-describedby="${`title-DistributeSpaceVert-${count}`}"
    >
      <title id="${`title-DistributeSpaceVert-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeSpaceVert-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="14" rx="2" ry="2" width="30" x="14" y="28" />
      <rect height="16" rx="2" ry="2" width="20" x="16" y="4" />
      <path
        d="M2 13v3H1a1 1 0 00-1 1v2a1 1 0 001 1h1v8H1a1 1 0 00-1 1v2a1 1 0 001 1h1v3a1 1 0 001 1h2a1 1 0 001-1v-3h5a1 1 0 001-1v-2a1 1 0 00-1-1H6v-8h5a1 1 0 001-1v-2a1 1 0 00-1-1H6v-3a1 1 0 00-1-1H3a1 1 0 00-1 1z"
      />
    </svg>
  `;
};
