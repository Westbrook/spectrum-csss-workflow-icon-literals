import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Inbox = ({ width = 24, height = 24, hidden = false, title = 'Inbox', desc } = {}) => {
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
      aria-labelledby="${`title-Inbox-${count}`}"
      aria-describedby="${`title-Inbox-${count}`}"
    >
      <title id="${`title-Inbox-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Inbox-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="32" x="8" y="20" />
      <rect height="4" rx="1" ry="1" width="32" x="8" y="12" />
      <rect height="4" rx="1" ry="1" width="32" x="8" y="4" />
      <path
        d="M44 13v15h-6a2 2 0 00-2 2v4a2 2 0 01-2 2H14a2 2 0 01-2-2v-4a2 2 0 00-2-2H4V13a1 1 0 00-1-1H1a1 1 0 00-1 1v29a2 2 0 002 2h44a2 2 0 002-2V13a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
      />
    </svg>
  `;
};
