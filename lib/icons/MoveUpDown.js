import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoveUpDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Move Up Down',
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
      aria-labelledby="${`title-MoveUpDown-${count}`}"
      aria-describedby="${`title-MoveUpDown-${count}`}"
    >
      <title id="${`title-MoveUpDown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoveUpDown-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M33.146 9.146a.5.5 0 01-.353.854H28v6h-8v-6h-4.793a.5.5 0 01-.353-.854L24 0zm0 27.708a.5.5 0 00-.353-.854H28v-6h-8v6h-4.793a.5.5 0 00-.353.854L24 46z"
      />
      <rect height="6" rx="1" ry="1" width="40" x="4" y="20" />
    </svg>
  `;
};
