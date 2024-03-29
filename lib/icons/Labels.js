import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Labels = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Labels',
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
      aria-labelledby="${`title-Labels-${count}`}"
      aria-describedby="${`title-Labels-${count}`}"
    >
      <title id="${`title-Labels-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Labels-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.293 19.293l-17-17A1 1 0 0023.586 2H9a1 1 0 00-1 1v14.586a1 1 0 00.293.707l17 17a1 1 0 001.414 0l14.586-14.586a1 1 0 000-1.414zM14 10.6A2.6 2.6 0 1116.6 8a2.6 2.6 0 01-2.6 2.6z"
      />
      <path
        d="M39 29L26.707 41.293a1 1 0 01-1.414 0l-17-17A1 1 0 018 23.585v6a1 1 0 00.293.707l17 17a1 1 0 001.414 0l14.586-14.585a1 1 0 000-1.414z"
      />
    </svg>
  `;
};
