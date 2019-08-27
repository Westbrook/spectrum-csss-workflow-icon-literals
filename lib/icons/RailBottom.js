import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RailBottom = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rail Bottom',
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
      aria-labelledby="${`title-RailBottom-${count}`}"
      aria-describedby="${`title-RailBottom-${count}`}"
    >
      <title id="${`title-RailBottom-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RailBottom-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 4H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V6a2 2 0 00-2-2zM26 35a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h20a1 1 0 011 1zm18-5H4V8h40z"
        fill="currentColor"
      />
    </svg>
  `;
};
