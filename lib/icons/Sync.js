import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Sync = ({ width = 24, height = 24, hidden = false, title = 'Sync', desc } = {}) => {
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
      aria-labelledby="${`title-Sync-${count}`}"
      aria-describedby="${`title-Sync-${count}`}"
    >
      <title id="${`title-Sync-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Sync-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.664 30.253l-12-12a.979.979 0 00-.658-.253A1 1 0 0032 19v7H22a2 2 0 00-2 2v6a2 2 0 002 2h10v7a1 1 0 001.006 1 .979.979 0 00.658-.255l12-12a1 1 0 000-1.494z"
      />
      <path
        d="M26 22a2 2 0 002-2v-6a2 2 0 00-2-2H16V5a1 1 0 00-1.006-1 .979.979 0 00-.658.255l-12 12a1 1 0 000 1.494l12 12a.979.979 0 00.658.255A1 1 0 0016 29v-7z"
      />
    </svg>
  `;
};
