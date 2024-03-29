import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CalendarAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Calendar Add',
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
      aria-labelledby="${`title-CalendarAdd-${count}`}"
      aria-describedby="${`title-CalendarAdd-${count}`}"
    >
      <title id="${`title-CalendarAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CalendarAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="4" x="10" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="26" y="18" />
      <rect height="4" rx="1" ry="1" width="4" x="10" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="10" y="30" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="30" />
      <path
        d="M36 20.1a15.933 15.933 0 012 .139V19a1 1 0 00-1-1h-2a1 1 0 00-1 1v1.239a15.933 15.933 0 012-.139z"
      />
      <path
        d="M20.239 38H6V12h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h20v1a1 1 0 001 1h2a1 1 0 001-1v-1h4v9.28a15.881 15.881 0 014 2.365V9a1 1 0 00-1-1h-7V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v32a1 1 0 001 1h18.28a15.787 15.787 0 01-1.041-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
