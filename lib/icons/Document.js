import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Document = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Document',
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
      aria-labelledby="${`title-Document-${count}`}"
      aria-describedby="${`title-Document-${count}`}"
    >
      <title id="${`title-Document-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Document-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M26 16V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V18H28a2 2 0 01-2-2z" />
      <path d="M30 4v10h10L30 4z" />
    </svg>
  `;
};
