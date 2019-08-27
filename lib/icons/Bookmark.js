import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Bookmark = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark',
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
      aria-labelledby="${`title-Bookmark-${count}`}"
      aria-describedby="${`title-Bookmark-${count}`}"
    >
      <title id="${`title-Bookmark-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Bookmark-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14.884 46.939L19 42l4.116 4.939a.5.5 0 00.884-.32V30H14v16.619a.5.5 0 00.884.32zM44.429 20h-3.538L28 37.725V42h.981a2 2 0 001.618-.824l14.477-19.9A.8.8 0 0044.429 20z"
      />
      <path
        d="M44.429 4H21.617A2 2 0 0020 4.824L4 26h.045c-2.282 3.019-2.982 7.3-.389 11.731A8.727 8.727 0 0010 41.922v-4.331A5.959 5.959 0 0112 26h16.981a2 2 0 001.618-.824l14.477-19.9A.8.8 0 0044.429 4z"
      />
    </svg>
  `;
};
