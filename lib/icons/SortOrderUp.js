import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SortOrderUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sort Order Up',
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
      aria-labelledby="${`title-SortOrderUp-${count}`}"
      aria-describedby="${`title-SortOrderUp-${count}`}"
    >
      <title id="${`title-SortOrderUp-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SortOrderUp-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="28" x="4" y="32" />
      <rect height="4" rx="1" ry="1" width="24" x="4" y="22" />
      <rect height="4" rx="1" ry="1" width="20" x="4" y="12" />
      <path
        d="M45.764 14.634L40.313 9.11a.5.5 0 00-.626 0l-5.451 5.524a.785.785 0 00-.236.56.8.8 0 00.8.806H38v19a1 1 0 001 1h2a1 1 0 001-1V16h3.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56z"
      />
    </svg>
  `;
};
