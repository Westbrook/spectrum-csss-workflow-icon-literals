import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Checkmark = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Checkmark',
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
      aria-labelledby="${`title-Checkmark-${count}`}"
      aria-describedby="${`title-Checkmark-${count}`}"
    >
      <title id="${`title-Checkmark-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Checkmark-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.3 9.834L38.33 7.52a1 1 0 00-1.4.175l-17.697 22.73-8.613-8.614a1 1 0 00-1.414 0l-2.695 2.7a1 1 0 000 1.414l12.432 12.442a1 1 0 001.5-.093l21.034-27.037a1 1 0 00-.177-1.403z"
        fill="currentColor"
      />
    </svg>
  `;
};
