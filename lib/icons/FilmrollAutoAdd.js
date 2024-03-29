import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FilmrollAutoAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filmroll Auto Add',
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
      aria-labelledby="${`title-FilmrollAutoAdd-${count}`}"
      aria-describedby="${`title-FilmrollAutoAdd-${count}`}"
    >
      <title id="${`title-FilmrollAutoAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FilmrollAutoAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="28" rx="2" ry="2" width="18" x="4" y="12" />
      <path
        d="M30 29a5.015 5.015 0 015-5h3a2 2 0 002-2v-6a2 2 0 00-2-2H26v22h2a2 2 0 002-2zM18 8V5a1 1 0 00-1-1H9a1 1 0 00-1 1v3zm24 28v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5h-5a1 1 0 00-1 1v2a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 001-1v-5h5a1 1 0 001-1v-2a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
