import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LayersForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Layers Forward',
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
      aria-labelledby="${`title-LayersForward-${count}`}"
      aria-describedby="${`title-LayersForward-${count}`}"
    >
      <title id="${`title-LayersForward-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LayersForward-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6.313 21.11a.5.5 0 00-.626 0L.236 26.634a.785.785 0 00-.236.56.8.8 0 00.8.806H4v15a1 1 0 001 1h2a1 1 0 001-1V28h3.2a.8.8 0 00.8-.806.785.785 0 00-.236-.56zm7.052-8.438l15.983 10.135a1.2 1.2 0 001.3 0l15.987-10.135a.8.8 0 000-1.344L30.652 1.555a1.2 1.2 0 00-1.3 0l-15.987 9.773a.8.8 0 000 1.344zM30 5.85L40 12l-10 6.49L20 12z"
      />
      <path
        d="M46.635 23.328l-5.344-3.267-10.639 6.746a1.2 1.2 0 01-1.3 0l-10.643-6.746-5.344 3.267a.8.8 0 000 1.344l15.983 10.135a1.2 1.2 0 001.3 0l15.987-10.135a.8.8 0 000-1.344z"
      />
      <path
        d="M46.635 35.328l-5.344-3.267-3.789 2.4L40 36l-10 6.49L20 36l2.5-1.537-3.789-2.4-5.344 3.267a.8.8 0 000 1.344l15.981 10.133a1.2 1.2 0 001.3 0l15.987-10.135a.8.8 0 000-1.344z"
      />
    </svg>
  `;
};
