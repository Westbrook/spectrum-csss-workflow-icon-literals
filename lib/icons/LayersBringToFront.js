import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LayersBringToFront = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Layers Bring To Front',
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
      aria-labelledby="${`title-LayersBringToFront-${count}`}"
      aria-describedby="${`title-LayersBringToFront-${count}`}"
    >
      <title id="${`title-LayersBringToFront-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LayersBringToFront-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6.313 3.11a.5.5 0 00-.626 0L.236 8.634a.785.785 0 00-.236.56.8.8 0 00.8.806H4v33a1 1 0 001 1h2a1 1 0 001-1V10h3.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56zm7.052 9.562l15.983 10.135a1.2 1.2 0 001.3 0l15.987-10.135a.8.8 0 000-1.344L30.652 1.555a1.2 1.2 0 00-1.3 0l-15.987 9.773a.8.8 0 000 1.344zm33.27 22.656l-5.344-3.267-3.789 2.4L40 36l-10 6.49L20 36l2.5-1.537-3.789-2.4-5.344 3.267a.8.8 0 000 1.344l15.981 10.133a1.2 1.2 0 001.3 0l15.987-10.135a.8.8 0 000-1.344z"
      />
      <path
        d="M46.635 23.268L41.291 20 37.5 22.4l2.5 1.539-10 6.49-10-6.49 2.5-1.539-3.791-2.4-5.344 3.268a.8.8 0 000 1.343l15.983 10.136a1.2 1.2 0 001.3 0l15.987-10.136a.8.8 0 000-1.343z"
      />
    </svg>
  `;
};
