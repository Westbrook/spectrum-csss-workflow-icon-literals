import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Brush = ({ width = 24, height = 24, hidden = false, title = 'Brush', desc } = {}) => {
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
      aria-labelledby="${`title-Brush-${count}`}"
      aria-describedby="${`title-Brush-${count}`}"
    >
      <title id="${`title-Brush-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Brush-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16.647 26.889a7.859 7.859 0 00-6.01 2.189 14.077 14.077 0 00-2.967 5.878c-.875 2.782-1.7 5.41-5.261 7.107a1 1 0 00.263 1.89c.8.136 1.721.251 2.72.326 3.6.268 10.379.154 15.314-3.6a7.6 7.6 0 003.139-5.563 7.739 7.739 0 00-7.198-8.227zM26.53 30.1C36.51 18.977 47.871 5.715 45.094 2.938S29.335 13.15 19.48 23.8a11.4 11.4 0 017.05 6.3z"
      />
    </svg>
  `;
};
