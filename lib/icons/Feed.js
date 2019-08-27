import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Feed = ({ width = 24, height = 24, hidden = false, title = 'Feed', desc } = {}) => {
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
      aria-labelledby="${`title-Feed-${count}`}"
      aria-describedby="${`title-Feed-${count}`}"
    >
      <title id="${`title-Feed-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Feed-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40 40H8a2 2 0 01-2-2V8a2 2 0 012-2h32a2 2 0 012 2v30a2 2 0 01-2 2zm-2-30H10v6h28zm0 10H10v6h28zm0 10H10v6h28z"
        fill="currentColor"
      />
    </svg>
  `;
};
