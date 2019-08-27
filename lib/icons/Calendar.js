import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Calendar = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Calendar',
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
      aria-labelledby="${`title-Calendar-${count}`}"
      aria-describedby="${`title-Calendar-${count}`}"
    >
      <title id="${`title-Calendar-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Calendar-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="4" x="10" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="26" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="34" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="10" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="26" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="34" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="10" y="30" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="30" />
      <rect height="4" rx="1" ry="1" width="4" x="26" y="30" />
      <rect height="4" rx="1" ry="1" width="4" x="34" y="30" />
      <path
        d="M45 8h-7V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v32a1 1 0 001 1h42a1 1 0 001-1V9a1 1 0 00-1-1zm-3 30H6V12h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h20v1a1 1 0 001 1h2a1 1 0 001-1v-1h4z"
      />
    </svg>
  `;
};
