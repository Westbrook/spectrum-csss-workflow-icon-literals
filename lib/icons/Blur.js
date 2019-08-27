import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Blur = ({ width = 24, height = 24, hidden = false, title = 'Blur', desc } = {}) => {
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
      aria-labelledby="${`title-Blur-${count}`}"
      aria-describedby="${`title-Blur-${count}`}"
    >
      <title id="${`title-Blur-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Blur-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19.963.633c1.79 12.273-10.281 21.585-10.281 31.419 0 7.342 6.41 13.3 14.318 13.3s14.318-5.953 14.318-13.3c0-9.885-14.295-20.915-18-31.49-.097-.282-.355.071-.355.071z"
        fill="currentColor"
      />
    </svg>
  `;
};
