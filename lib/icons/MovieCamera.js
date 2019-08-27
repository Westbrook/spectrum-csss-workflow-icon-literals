import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MovieCamera = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Movie Camera',
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
      aria-labelledby="${`title-MovieCamera-${count}`}"
      aria-describedby="${`title-MovieCamera-${count}`}"
    >
      <title id="${`title-MovieCamera-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MovieCamera-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.4 13.5L32 22.05V13a2 2 0 00-2-2H6a2 2 0 00-2 2v22a2 2 0 002 2h24a2 2 0 002-2v-9.05l10.4 8.55a1 1 0 001.6-.8V14.3a1 1 0 00-1.6-.8z"
        fill="currentColor"
      />
    </svg>
  `;
};
