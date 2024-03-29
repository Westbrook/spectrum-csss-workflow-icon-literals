import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CalendarUnlocked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Calendar Unlocked',
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
      aria-labelledby="${`title-CalendarUnlocked-${count}`}"
      aria-describedby="${`title-CalendarUnlocked-${count}`}"
    >
      <title id="${`title-CalendarUnlocked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CalendarUnlocked-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45 32H27.9v-5.647a6.279 6.279 0 014.955-6.246 6.149 6.149 0 016.653 3.312 7.516 7.516 0 01.3.8.5.5 0 00.659.307l2.681-1.069a.506.506 0 00.3-.623 9.965 9.965 0 00-10.317-6.8C28.094 16.463 24 21.236 24 26.292V32h-1a1 1 0 00-1 1v14a1 1 0 001 1h22a1 1 0 001-1V33a1 1 0 00-1-1zm-9 8.222V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.778a3 3 0 114 0z"
      />
      <path
        d="M40 6h-6V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H4a2 2 0 00-2 2v26a2 2 0 002 2h14v-3a4.92 4.92 0 01.12-1H6V10h4v1a1 1 0 001 1h2a1 1 0 001-1v-1h16v1a1 1 0 001 1h2a1 1 0 001-1v-1h4v2.609a13.9 13.9 0 014 1.933V8a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
