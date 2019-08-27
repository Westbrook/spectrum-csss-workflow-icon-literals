import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RailRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rail Right',
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
      aria-labelledby="${`title-RailRight-${count}`}"
      aria-describedby="${`title-RailRight-${count}`}"
    >
      <title id="${`title-RailRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RailRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M0 6v32a2 2 0 002 2h44a2 2 0 002-2V6a2 2 0 00-2-2H2a2 2 0 00-2 2zm36 25v-2a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1zm0-8v-2a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1zm0-8v-2a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1zM4 12h28v24H4z"
        fill="currentColor"
      />
    </svg>
  `;
};
