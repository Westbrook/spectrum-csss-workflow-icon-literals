import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Revenue = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Revenue',
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
      aria-labelledby="${`title-Revenue-${count}`}"
      aria-describedby="${`title-Revenue-${count}`}"
    >
      <title id="${`title-Revenue-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Revenue-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M0 42a2 2 0 002 2h4a2 2 0 002-2V23.079l-8 6.668zm12 0a2 2 0 002 2h4a2 2 0 002-2V28.647l-8-8zm12 0a2 2 0 002 2h4a2 2 0 002-2V27.659L24 34zm16.041-20.4L36 24.643V42a2 2 0 002 2h4a2 2 0 002-2V22.486a5.018 5.018 0 01-1.008.1 4.936 4.936 0 01-2.951-.986z"
      />
      <path
        d="M32.414 6.489a1 1 0 00-.707 1.711l3.327 3.327-9.334 7.852L12.892 6.568a1 1 0 00-1.347-.061L0 16.126v8.414l11.754-9.8 12.6 12.6a1 1 0 001.31.091L39.41 15.9l2.883 2.883A1 1 0 0044 18.075V6.489z"
      />
    </svg>
  `;
};
