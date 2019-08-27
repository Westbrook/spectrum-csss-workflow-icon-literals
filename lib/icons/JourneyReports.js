import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const JourneyReports = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Journey Reports',
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
      aria-labelledby="${`title-JourneyReports-${count}`}"
      aria-describedby="${`title-JourneyReports-${count}`}"
    >
      <title id="${`title-JourneyReports-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-JourneyReports-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="24" rx="1" width="4" x="44" y="24" />
      <rect height="14" rx="1" width="4" x="38" y="34" />
      <rect height="10" rx="1" width="4" x="32" y="38" />
      <rect height="8" rx="1" width="4" x="26" y="40" />
      <path
        d="M24 34V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20v8a7.991 7.991 0 004 6.921zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"
      />
    </svg>
  `;
};
