import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SortOrderDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sort Order Down',
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
      aria-labelledby="${`title-SortOrderDown-${count}`}"
      aria-describedby="${`title-SortOrderDown-${count}`}"
    >
      <title id="${`title-SortOrderDown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SortOrderDown-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="28" x="4" y="12" />
      <rect height="4" rx="1" ry="1" width="24" x="4" y="22" />
      <rect height="4" rx="1" ry="1" width="20" x="4" y="32" />
      <path
        d="M45.2 32H42V13a1 1 0 00-1-1h-2a1 1 0 00-1 1v19h-3.2a.8.8 0 00-.8.806.785.785 0 00.236.56l5.451 5.524a.5.5 0 00.626 0l5.451-5.524a.785.785 0 00.236-.56.8.8 0 00-.8-.806z"
      />
    </svg>
  `;
};
