import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Cloud = ({ width = 24, height = 24, hidden = false, title = 'Cloud', desc } = {}) => {
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
      aria-labelledby="${`title-Cloud-${count}`}"
      aria-describedby="${`title-Cloud-${count}`}"
    >
      <title id="${`title-Cloud-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Cloud-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.143 36a7.857 7.857 0 10-.887-15.664A9.953 9.953 0 1017.8 16.382 8.385 8.385 0 007.521 26.64a4.768 4.768 0 00-.807-.069 4.715 4.715 0 000 9.429z"
        fill="currentColor"
      />
    </svg>
  `;
};
