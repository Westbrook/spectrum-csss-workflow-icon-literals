import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Mailbox = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Mailbox',
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
      aria-labelledby="${`title-Mailbox-${count}`}"
      aria-describedby="${`title-Mailbox-${count}`}"
    >
      <title id="${`title-Mailbox-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Mailbox-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30 0h-8a2 2 0 00-2 2v16h4V8h6a2 2 0 002-2V2a2 2 0 00-2-2zM16 18a6 6 0 00-6-6H6a6 6 0 00-6 6v20a2 2 0 002 2h14z"
      />
      <path d="M42 12H28v8a2 2 0 01-2 2h-6v18h26a2 2 0 002-2V18a6 6 0 00-6-6z" />
    </svg>
  `;
};
