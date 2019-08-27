import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Alias = ({ width = 24, height = 24, hidden = false, title = 'Alias', desc } = {}) => {
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
      aria-labelledby="${`title-Alias-${count}`}"
      aria-describedby="${`title-Alias-${count}`}"
    >
      <title id="${`title-Alias-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Alias-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 5a1 1 0 00-1-1H14.94a1 1 0 00-.943 1 .984.984 0 00.294.7l5.689 5.689a66.854 66.854 0 00-6.159 11.115 36.062 36.062 0 00-2.677 10.457c-.1 1.05-.147 2.092-.147 3.124a36.824 36.824 0 00.71 7.087 1.018 1.018 0 001.993.028l.007-.028a31.279 31.279 0 013.2-8.524 28.012 28.012 0 015.3-6.688 55.887 55.887 0 018.2-6.152l5.893 5.897a.981.981 0 00.7.3 1 1 0 001-.948V5z"
        fill="currentColor"
      />
    </svg>
  `;
};
