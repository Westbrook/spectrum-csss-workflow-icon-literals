import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Vignette = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Vignette',
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
      aria-labelledby="${`title-Vignette-${count}`}"
      aria-describedby="${`title-Vignette-${count}`}"
    >
      <title id="${`title-Vignette-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Vignette-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 5.818v36.364A1.818 1.818 0 005.818 44h36.364A1.818 1.818 0 0044 42.182V5.818A1.818 1.818 0 0042.182 4H5.818A1.818 1.818 0 004 5.818zM40 40H8V8h32z"
      />
      <path
        d="M21.115 10H10v11.115A14.31 14.31 0 0121.115 10zM38 21.115V10H26.885A14.31 14.31 0 0138 21.115zM26.885 38H38V26.885A14.31 14.31 0 0126.885 38zM10 26.885V38h11.115A14.31 14.31 0 0110 26.885z"
      />
    </svg>
  `;
};
