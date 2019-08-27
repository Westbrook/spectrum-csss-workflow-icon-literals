import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const InvertAdj = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Invert Adj',
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
      aria-labelledby="${`title-InvertAdj-${count}`}"
      aria-describedby="${`title-InvertAdj-${count}`}"
    >
      <title id="${`title-InvertAdj-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-InvertAdj-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M24.5 11a13.494 13.494 0 00-10.49 21.99l20.038-18.033A13.455 13.455 0 0024.5 11z" />
      <path
        d="M46 2H2a2 2 0 00-2 2v40a2 2 0 002 2h44a2 2 0 002-2V4a2 2 0 00-2-2zm-8 22.5a13.5 13.5 0 01-23.99 8.49L4 42V6h40l-9.952 8.957A13.453 13.453 0 0138 24.5z"
      />
    </svg>
  `;
};
