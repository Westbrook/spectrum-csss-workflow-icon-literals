import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TrimPath = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trim Path',
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
      aria-labelledby="${`title-TrimPath-${count}`}"
      aria-describedby="${`title-TrimPath-${count}`}"
    >
      <title id="${`title-TrimPath-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TrimPath-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14 12h18V6a2 2 0 00-2-2H6a2 2 0 00-2 2v24a2 2 0 002 2h6V14a2 2 0 012-2z" />
      <rect height="28" rx="2" ry="2" width="28" x="16" y="16" />
    </svg>
  `;
};
