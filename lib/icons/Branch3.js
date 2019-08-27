import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Branch3 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Branch3',
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
      aria-labelledby="${`title-Branch3-${count}`}"
      aria-describedby="${`title-Branch3-${count}`}"
    >
      <title id="${`title-Branch3-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Branch3-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18 38a7.948 7.948 0 00-2.954-6.161l7.531-13.982a7.121 7.121 0 002.846 0l7.53 13.983a8.116 8.116 0 103.623-1.7l-7.53-13.983a8 8 0 10-10.093 0l-7.531 13.987A7.991 7.991 0 1018 38zm24.2 0a4.2 4.2 0 11-4.2-4.2 4.2 4.2 0 014.2 4.2zM5.8 38a4.2 4.2 0 114.2 4.2A4.2 4.2 0 015.8 38z"
        fill="currentColor"
      />
    </svg>
  `;
};
