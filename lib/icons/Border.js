import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Border = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Border',
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
      aria-labelledby="${`title-Border-${count}`}"
      aria-describedby="${`title-Border-${count}`}"
    >
      <title id="${`title-Border-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Border-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 5.818v36.364A1.818 1.818 0 005.818 44h36.364A1.818 1.818 0 0044 42.182V5.818A1.818 1.818 0 0042.182 4H5.818A1.818 1.818 0 004 5.818zM40 40H8V8h32z"
      />
      <path d="M10 10v28h28V10zm24 24H14V14h20z" />
    </svg>
  `;
};
