import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlignRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Align Right',
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
      aria-labelledby="${`title-AlignRight-${count}`}"
      aria-describedby="${`title-AlignRight-${count}`}"
    >
      <title id="${`title-AlignRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlignRight-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="44" rx="1" ry="1" width="4" x="42" y="2" />
      <rect height="12" rx="2" ry="2" width="20" x="18" y="8" />
      <rect height="12" rx="2" ry="2" width="34" x="4" y="28" />
    </svg>
  `;
};
