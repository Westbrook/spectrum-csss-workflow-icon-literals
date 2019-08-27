import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Contrast = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Contrast',
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
      aria-labelledby="${`title-Contrast-${count}`}"
      aria-describedby="${`title-Contrast-${count}`}"
    >
      <title id="${`title-Contrast-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Contrast-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 7.9A16.1 16.1 0 117.9 24 16.118 16.118 0 0124 7.9zm0-3.8A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1z"
      />
      <path d="M24 11.7v24.6a12.3 12.3 0 000-24.6z" />
    </svg>
  `;
};
