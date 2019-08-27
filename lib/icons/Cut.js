import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Cut = ({ width = 24, height = 24, hidden = false, title = 'Cut', desc } = {}) => {
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
      aria-labelledby="${`title-Cut-${count}`}"
      aria-describedby="${`title-Cut-${count}`}"
    >
      <title id="${`title-Cut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Cut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M40.256 30.045c-.065 0-.142-.005-.162-.006a12.549 12.549 0 01-9.765-5.68 4.406 4.406 0 00-.3-.359 4.406 4.406 0 00.3-.359 12.549 12.549 0 019.765-5.68c.02 0 .1 0 .162-.006a7.978 7.978 0 10-6.133-2.555l-9.1 5.157L9.8 11.94a5.336 5.336 0 00-5.066-.1L.865 13.756 18.943 24 .865 34.243l3.869 1.92a5.333 5.333 0 005.066-.1l15.222-8.615 9.1 5.157a8.01 8.01 0 106.133-2.556zM40.3 5.811A4.2 4.2 0 1135.811 9.7 4.2 4.2 0 0140.3 5.811zm0 36.378a4.2 4.2 0 113.888-4.49 4.2 4.2 0 01-3.888 4.49z"
        fill="currentColor"
      />
    </svg>
  `;
};
