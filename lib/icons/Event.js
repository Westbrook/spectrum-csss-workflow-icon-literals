import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Event = ({ width = 24, height = 24, hidden = false, title = 'Event', desc } = {}) => {
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
      aria-labelledby="${`title-Event-${count}`}"
      aria-describedby="${`title-Event-${count}`}"
    >
      <title id="${`title-Event-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Event-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.532 14.054a.5.5 0 00-.5.5v32.781a.5.5 0 00.5.5.49.49 0 00.35-.147L34.552 38h12.9a.5.5 0 00.354-.854L24.882 14.2a.489.489 0 00-.35-.146z"
      />
      <path d="M20.028 38h-12V8h30v12l4 4V4h-38v38h16v-4z" />
    </svg>
  `;
};
