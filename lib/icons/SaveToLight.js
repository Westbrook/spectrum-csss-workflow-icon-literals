import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SaveToLight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Save To Light',
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
      aria-labelledby="${`title-SaveToLight-${count}`}"
      aria-describedby="${`title-SaveToLight-${count}`}"
    >
      <title id="${`title-SaveToLight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SaveToLight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43 12h-6a1 1 0 00-1 1v2a1 1 0 001 1h3v22H6V16h3a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v28a1 1 0 001 1h40a1 1 0 001-1V13a1 1 0 00-1-1z"
      />
      <path
        d="M32.586 16H26V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v13h-6.586a1 1 0 00-.707 1.707L23 28l10.293-10.293A1 1 0 0032.586 16z"
      />
    </svg>
  `;
};
