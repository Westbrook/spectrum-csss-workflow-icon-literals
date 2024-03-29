import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Visibility = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Visibility',
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
      aria-labelledby="${`title-Visibility-${count}`}"
      aria-describedby="${`title-Visibility-${count}`}"
    >
      <title id="${`title-Visibility-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Visibility-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32.817 11.44A19.969 19.969 0 0024 9.249c-11.552 0-21 11.5-21 15.231 0 4 9.944 14.271 20.915 14.271C34.975 38.751 45 28.477 45 24.48c0-3.152-5.619-9.788-12.183-13.04zM24 36.3A12.3 12.3 0 1136.3 24 12.3 12.3 0 0124 36.3z"
      />
      <path
        d="M27.556 24.111A3.556 3.556 0 0124 20.555a3.506 3.506 0 011.8-3.025 6.523 6.523 0 00-1.8-.28A6.75 6.75 0 1030.75 24a6.264 6.264 0 00-.233-1.594 3.5 3.5 0 01-2.961 1.705z"
      />
    </svg>
  `;
};
