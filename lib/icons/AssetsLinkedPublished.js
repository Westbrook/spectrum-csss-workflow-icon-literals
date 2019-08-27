import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AssetsLinkedPublished = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Assets Linked Published',
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
      aria-labelledby="${`title-AssetsLinkedPublished-${count}`}"
      aria-describedby="${`title-AssetsLinkedPublished-${count}`}"
    >
      <title id="${`title-AssetsLinkedPublished-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AssetsLinkedPublished-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M17 32H6V8h36v14l4-.875V6a2 2 0 00-2-2H4a2 2 0 00-2 2v28a2 2 0 002 2h13zm14.237 6.8l9.084 5.063a.819.819 0 001.1-.366l6.485-16.146zm-3.154.963V47.2a.5.5 0 00.824.381l5.32-4.525z"
      />
      <path
        d="M46.79 25.535l-25.713 7.909a.409.409 0 00-.066.759l7.114 3.479zM19.112 24H16a4 4 0 010-8h6a4 4 0 014 4v2h2v-2a6.007 6.007 0 00-6-6h-6a6 6 0 000 12h4.764a7.993 7.993 0 01-1.652-2z"
      />
      <path
        d="M32 14h-4.765a7.993 7.993 0 011.652 2H32a4 4 0 110 8h-6a4 4 0 01-4-4v-2h-2v2a6.007 6.007 0 006 6h6a6 6 0 100-12z"
      />
    </svg>
  `;
};
