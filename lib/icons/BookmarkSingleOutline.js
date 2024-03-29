import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BookmarkSingleOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bookmark Single Outline',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="${height}"
      viewBox="0 0 42 42"
      width="${width}"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-BookmarkSingleOutline-${count}`}"
      aria-describedby="${`title-BookmarkSingleOutline-${count}`}"
    >
      <title id="${`title-BookmarkSingleOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BookmarkSingleOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M28 7v25.85l-4.459-4.459-2.47-2.47-2.471 2.465-4.6 4.575L14.011 7zm2.45-3.5H11.562a1.05 1.05 0 00-1.05 1.05L10.5 40.482c0 .3.11.465.276.465a.537.537 0 00.339-.17l9.951-9.911 9.845 9.846a.512.512 0 00.334.186c.154 0 .255-.16.255-.451V4.55a1.05 1.05 0 00-1.05-1.05z"
        fill="currentColor"
      />
    </svg>
  `;
};
