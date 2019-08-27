import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Draw = ({ width = 24, height = 24, hidden = false, title = 'Draw', desc } = {}) => {
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
      aria-labelledby="${`title-Draw-${count}`}"
      aria-describedby="${`title-Draw-${count}`}"
    >
      <title id="${`title-Draw-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Draw-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.763 11.621l-7.42-7.382a1.889 1.889 0 00-2.649.179L29.4 8.712l9.88 9.88 4.31-4.319a1.886 1.886 0 00.173-2.652zM26.712 11.4L8.82 29.292a2.233 2.233 0 00-.521.814L4.115 41.659a1.655 1.655 0 002.171 2.186L17.9 39.713a2.231 2.231 0 00.827-.526l17.87-17.9zm-9.658 25.745c-3.1 1.116-6.975 2.517-9.652 3.475l3.456-9.653z"
      />
    </svg>
  `;
};
