import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlignBottom = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Bottom',
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
      aria-labelledby="${`title-AlignBottom-${count}`}"
      aria-describedby="${`title-AlignBottom-${count}`}"
    >
      <title id="${`title-AlignBottom-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlignBottom-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="44" x="2" y="42" />
      <rect height="20" rx="2" ry="2" width="14" x="28" y="18" />
      <rect height="34" rx="2" ry="2" width="12" x="8" y="4" />
    </svg>
  `;
};
