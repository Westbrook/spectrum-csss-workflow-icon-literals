import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBullet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bullet',
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
      aria-labelledby="${`title-GraphBullet-${count}`}"
      aria-describedby="${`title-GraphBullet-${count}`}"
    >
      <title id="${`title-GraphBullet-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBullet-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20 20H5a1 1 0 00-1 1v4a1 1 0 001 1h15zM4 9v4a1 1 0 001 1h5V8H5a1 1 0 00-1 1zm33-1H20v6h17a1 1 0 001-1V9a1 1 0 00-1-1z"
      />
      <rect height="10" rx="2.449" ry="2.449" width="6" x="12" y="6" />
      <rect height="10" rx="2.449" ry="2.449" width="6" x="30" y="30" />
      <rect height="10" rx="2.449" ry="2.449" width="6" x="22" y="18" />
      <path
        d="M43 32h-5v6h5a1 1 0 001-1v-4a1 1 0 00-1-1zM4 33v4a1 1 0 001 1h23v-6H5a1 1 0 00-1 1z"
      />
    </svg>
  `;
};
