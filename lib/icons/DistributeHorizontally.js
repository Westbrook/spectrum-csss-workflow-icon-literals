import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeHorizontally = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Horizontally',
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
      aria-labelledby="${`title-DistributeHorizontally-${count}`}"
      aria-describedby="${`title-DistributeHorizontally-${count}`}"
    >
      <title id="${`title-DistributeHorizontally-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeHorizontally-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="44" rx="1" ry="1" width="4" x="8" y="2" />
      <rect height="44" rx="1" ry="1" width="4" x="36" y="2" />
      <rect height="28" rx="2" ry="2" width="12" x="18" y="10" />
    </svg>
  `;
};
