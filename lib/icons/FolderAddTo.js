import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FolderAddTo = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Folder Add To',
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
      aria-labelledby="${`title-FolderAddTo-${count}`}"
      aria-describedby="${`title-FolderAddTo-${count}`}"
    >
      <title id="${`title-FolderAddTo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FolderAddTo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.1 4.8a2 2 0 00-1.6-.8H6a2 2 0 00-2 2v4h18zm-4.493 31.757l12.664-13.125a5.448 5.448 0 019.359 3.793v.066a19.681 19.681 0 018.37 3.75V16a2 2 0 00-2-2H4v26a2 2 0 002 2h12.86z"
      />
      <path
        d="M31.03 31.465v-4.24a.848.848 0 00-1.448-.6L20 36.556l9.582 9.932a.848.848 0 001.448-.6v-4.3c9.178-1.545 14.058 3.693 15.888 6.175A.6.6 0 0048 47.412c0-2.561-2.923-15.947-16.97-15.947z"
      />
    </svg>
  `;
};
