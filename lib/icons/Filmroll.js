import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Filmroll = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filmroll',
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
      aria-labelledby="${`title-Filmroll-${count}`}"
      aria-describedby="${`title-Filmroll-${count}`}"
    >
      <title id="${`title-Filmroll-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Filmroll-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="28" rx="2" ry="2" width="18" x="4" y="12" />
      <path
        d="M32 29a7.021 7.021 0 017-7h3a2 2 0 002-2v-6a2 2 0 00-2-2H26v22h2a4 4 0 004-4zM18 8V5a1 1 0 00-1-1H9a1 1 0 00-1 1v3z"
      />
    </svg>
  `;
};
