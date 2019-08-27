import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BookmarkSmall = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark Small',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-BookmarkSmall-${count}`}"
      aria-describedby="${`title-BookmarkSmall-${count}`}"
    >
      <title id="${`title-BookmarkSmall-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BookmarkSmall-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32.571 8H15.429A1.429 1.429 0 0014 9.429V41.58a.747.747 0 00.437.651.592.592 0 00.286.063.725.725 0 00.5-.211l8.82-8.586 8.745 8.554a.719.719 0 00.5.206.7.7 0 00.286-.054.707.707 0 00.42-.649V9.429A1.429 1.429 0 0032.571 8z"
        fill="currentColor"
      />
    </svg>
  `;
};
