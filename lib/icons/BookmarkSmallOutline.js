import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BookmarkSmallOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark Small Outline',
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
      aria-labelledby="${`title-BookmarkSmallOutline-${count}`}"
      aria-describedby="${`title-BookmarkSmallOutline-${count}`}"
    >
      <title id="${`title-BookmarkSmallOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BookmarkSmallOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30 12v21.726l-5.948-5.818L18 33.8V12h12m2.571-4H15.429A1.429 1.429 0 0014 9.429V41.58a.747.747 0 00.437.651.594.594 0 00.268.064h.018a.725.725 0 00.5-.211l8.82-8.586 8.745 8.554a.719.719 0 00.5.206h.016a.7.7 0 00.27-.054.707.707 0 00.42-.649V9.429A1.429 1.429 0 0032.571 8z"
        fill="currentColor"
      />
    </svg>
  `;
};
