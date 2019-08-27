import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeVertically = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Vertically',
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
      aria-labelledby="${`title-DistributeVertically-${count}`}"
      aria-describedby="${`title-DistributeVertically-${count}`}"
    >
      <title id="${`title-DistributeVertically-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeVertically-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="44" x="2" y="36" />
      <rect height="4" rx="1" ry="1" width="44" x="2" y="8" />
      <rect height="12" rx="2" ry="2" width="28" x="10" y="18" />
    </svg>
  `;
};
