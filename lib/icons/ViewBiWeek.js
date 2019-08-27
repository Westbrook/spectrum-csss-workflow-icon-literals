import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewBiWeek = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Bi Week',
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
      aria-labelledby="${`title-ViewBiWeek-${count}`}"
      aria-describedby="${`title-ViewBiWeek-${count}`}"
    >
      <title id="${`title-ViewBiWeek-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewBiWeek-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="28" x="10" y="20" />
      <rect height="4" rx="1" ry="1" width="28" x="10" y="28" />
      <path
        d="M45 8h-7V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v32a1 1 0 001 1h42a1 1 0 001-1V9a1 1 0 00-1-1zm-3 30H6V12h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h20v1a1 1 0 001 1h2a1 1 0 001-1v-1h4z"
      />
    </svg>
  `;
};
