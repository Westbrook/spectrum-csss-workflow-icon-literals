import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Capitals = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Capitals',
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
      aria-labelledby="${`title-Capitals-${count}`}"
      aria-describedby="${`title-Capitals-${count}`}"
    >
      <title id="${`title-Capitals-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Capitals-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M3 12a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-3h4v18H7a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V16h4v2.973a1 1 0 001 1h2a1 1 0 001-1V13a1 1 0 00-1-1zm22 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-3h4v18h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V16h4v2.973a1 1 0 001 1h2a1 1 0 001-1V13a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
