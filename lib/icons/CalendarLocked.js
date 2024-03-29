import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CalendarLocked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Calendar Locked',
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
      aria-labelledby="${`title-CalendarLocked-${count}`}"
      aria-describedby="${`title-CalendarLocked-${count}`}"
    >
      <title id="${`title-CalendarLocked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CalendarLocked-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45 32h-1v-2a10 10 0 00-20 0v2h-1a1 1 0 00-1 1v14a1 1 0 001 1h22a1 1 0 001-1V33a1 1 0 00-1-1zm-17-2a6 6 0 0112 0v2H28zm8 10.221V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.779a3 3 0 114 0z"
      />
      <path
        d="M40 6h-6V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H4a2 2 0 00-2 2v26a2 2 0 002 2h14v-3a4.92 4.92 0 01.121-1H6V10h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h16v1a1 1 0 001 1h2a1 1 0 001-1v-1h4v6.583a13.92 13.92 0 014 1.951V8a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
