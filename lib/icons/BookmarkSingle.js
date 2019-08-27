import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BookmarkSingle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark Single',
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
      aria-labelledby="${`title-BookmarkSingle-${count}`}"
      aria-describedby="${`title-BookmarkSingle-${count}`}"
    >
      <title id="${`title-BookmarkSingle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BookmarkSingle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.075 35.275l11.252 11.253c.373.379.673.234.673-.3V5.2A1.2 1.2 0 0034.8 4H13.214a1.2 1.2 0 00-1.2 1.2L12 46.265c0 .548.314.694.7.337z"
        fill="currentColor"
      />
    </svg>
  `;
};
