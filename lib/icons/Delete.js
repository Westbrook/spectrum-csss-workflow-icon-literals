import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Delete = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Delete',
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
      aria-labelledby="${`title-Delete-${count}`}"
      aria-describedby="${`title-Delete-${count}`}"
    >
      <title id="${`title-Delete-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Delete-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41 8h-7V6a4 4 0 00-4-4H18a4 4 0 00-4 4v2H7a1 1 0 00-1 1v2a1 1 0 001 1h1.2l2 30a2 2 0 002 2h23.6a2 2 0 002-2l2-30H41a1 1 0 001-1V9a1 1 0 00-1-1zM18 6h12v2H18zm-1.24 31.974a2 2 0 01-2.134-1.857L13.383 18.16a2 2 0 013.991-.277l1.243 17.957a2 2 0 01-1.857 2.134zM26 36a2 2 0 01-4 0V18a2 2 0 014 0zm7.374.117a2 2 0 01-3.991-.277l1.243-17.957a2 2 0 013.991.277z"
        fill="currentColor"
      />
    </svg>
  `;
};
