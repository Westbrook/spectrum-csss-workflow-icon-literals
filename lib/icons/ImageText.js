import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageText = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Text',
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
      aria-labelledby="${`title-ImageText-${count}`}"
      aria-describedby="${`title-ImageText-${count}`}"
    >
      <title id="${`title-ImageText-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageText-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M37.406 14a3.5 3.5 0 11-3.5-3.5 3.5 3.5 0 013.5 3.5zM25 24a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-3h6v16h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V28h6v3a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1z"
      />
      <path
        d="M42 4H6a2 2 0 00-2 2v28a2 2 0 002 2h14V24a3.983 3.983 0 012.166-3.535l-3.643-3.642a2 2 0 00-2.828 0L8 24.518V8h32v12h4V6a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
