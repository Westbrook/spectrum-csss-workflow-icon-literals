import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Key = ({ width = 24, height = 24, hidden = false, title = 'Key', desc } = {}) => {
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
      aria-labelledby="${`title-Key-${count}`}"
      aria-describedby="${`title-Key-${count}`}"
    >
      <title id="${`title-Key-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Key-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47.363 11.7l-8.617-8.617a2 2 0 00-2.829 0L17.606 21.394a12.021 12.021 0 105.03 5.061l8.933-8.934 4.987 4.987a1 1 0 001.414 0l4.46-4.459-5.694-5.694 1.641-1.641 5.693 5.694 3.293-3.293a1 1 0 000-1.415zM10 38a4 4 0 114-4 4 4 0 01-4 4z"
        fill="currentColor"
      />
    </svg>
  `;
};
