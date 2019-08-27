import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RailTop = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rail Top',
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
      aria-labelledby="${`title-RailTop-${count}`}"
      aria-describedby="${`title-RailTop-${count}`}"
    >
      <title id="${`title-RailTop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RailTop-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M2 40h44a2 2 0 002-2V6a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2zM22 9a1 1 0 011-1h20a1 1 0 011 1v2a1 1 0 01-1 1H23a1 1 0 01-1-1zM4 14h40v22H4z"
        fill="currentColor"
      />
    </svg>
  `;
};
