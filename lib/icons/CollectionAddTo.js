import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CollectionAddTo = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Collection Add To',
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
      aria-labelledby="${`title-CollectionAddTo-${count}`}"
      aria-describedby="${`title-CollectionAddTo-${count}`}"
    >
      <title id="${`title-CollectionAddTo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CollectionAddTo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 36h-6V24h6v-4h-6V8h10v8h4V8h10v8h4V6a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h22zm-10 0H4V24h10zm0-16H4V8h10z"
      />
      <path
        d="M47.688 33.688l-6.826-6.826 5.972-6.011a.5.5 0 00-.357-.85H28v18.641a.5.5 0 00.854.358l6.008-6.139 6.826 6.826a1 1 0 001.414 0l4.586-4.587a1 1 0 000-1.412z"
      />
    </svg>
  `;
};
