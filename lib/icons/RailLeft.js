import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RailLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rail Left',
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
      aria-labelledby="${`title-RailLeft-${count}`}"
      aria-describedby="${`title-RailLeft-${count}`}"
    >
      <title id="${`title-RailLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RailLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 4H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V6a2 2 0 00-2-2zM12 32H4v-4h8zm0-8H4v-4h8zm0-8H4v-4h8zm32 20H16V12h28z"
        fill="currentColor"
      />
    </svg>
  `;
};
