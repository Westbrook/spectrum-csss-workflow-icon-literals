import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DeleteOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Delete Outline',
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
      aria-labelledby="${`title-DeleteOutline-${count}`}"
      aria-describedby="${`title-DeleteOutline-${count}`}"
    >
      <title id="${`title-DeleteOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DeleteOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43 8h-9V6a4 4 0 00-4-4H18a4 4 0 00-4 4v2H5a1 1 0 00-1 1v2a1 1 0 001 1h1.2l2 30a2 2 0 002 2h27.6a2 2 0 002-2l2-30H43a1 1 0 001-1V9a1 1 0 00-1-1zM18 6h12v2H18zm18 34H12l-2-28h28z"
      />
      <path
        d="M24 36a2 2 0 01-2-2V18a2 2 0 014 0v16a2 2 0 01-2 2zm-6.935.016a2 2 0 01-1.994-1.868L14 18.133a2 2 0 014-.266l1.066 16.016a2 2 0 01-1.866 2.129c-.045.002-.09.004-.135.004zm13.863.029h-.134a2 2 0 01-1.864-2.129L30 17.848a2 2 0 113.992.265l-1.069 16.065a2 2 0 01-1.995 1.867z"
      />
    </svg>
  `;
};
