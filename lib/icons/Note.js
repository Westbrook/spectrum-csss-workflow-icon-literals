import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Note = ({ width = 24, height = 24, hidden = false, title = 'Note', desc } = {}) => {
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
      aria-labelledby="${`title-Note-${count}`}"
      aria-describedby="${`title-Note-${count}`}"
    >
      <title id="${`title-Note-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Note-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 6H6a2 2 0 00-2 2v28a2 2 0 002 2h12l5.571 9.285a.5.5 0 00.858 0L30 38l12-.006a2 2 0 002-2V8a2 2 0 00-2-2zm-31 6h24a1 1 0 011 1v2a1 1 0 01-1 1H11a1 1 0 01-1-1v-2a1 1 0 011-1zm24 20H11a1 1 0 01-1-1v-2a1 1 0 011-1h24a1 1 0 011 1v2a1 1 0 01-1 1zm4-8H11a1 1 0 01-1-1v-2a1 1 0 011-1h28a1 1 0 011 1v2a1 1 0 01-1 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
