import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MBox = ({ width = 24, height = 24, hidden = false, title = 'MBox', desc } = {}) => {
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
      aria-labelledby="${`title-MBox-${count}`}"
      aria-describedby="${`title-MBox-${count}`}"
    >
      <title id="${`title-MBox-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MBox-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M46 6H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H4V14h40z" />
      <path
        d="M16 18h4v2h-4zm-4 0h2v2h-2zm10 0h4v2h-4zm6 0h4v2h-4zm6 0h2v2h-2zM16 32h4v2h-4zm-4 0h2v2h-2zm10 0h4v2h-4zm6 0h4v2h-4zm6 0h2v2h-2zm4.001-14h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm-30-12h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z"
      />
    </svg>
  `;
};
