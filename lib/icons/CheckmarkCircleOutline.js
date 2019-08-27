import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CheckmarkCircleOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Checkmark Circle Outline',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-CheckmarkCircleOutline-${count}`}"
      aria-describedby="${`title-CheckmarkCircleOutline-${count}`}"
    >
      <title id="${`title-CheckmarkCircleOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CheckmarkCircleOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23.9 7.8A16.1 16.1 0 117.8 23.9 16.1 16.1 0 0123.9 7.8zm0-3.8a19.9 19.9 0 1019.9 19.9A19.9 19.9 0 0023.9 4zm11.758 12.521l-2.972-2.313a1 1 0 00-1.404.175l-9.27 11.892-4.938-4.938a1 1 0 00-1.414 0l-2.694 2.694a1 1 0 000 1.414l8.757 8.772a1 1 0 001.497-.092l12.613-16.2a1 1 0 00-.175-1.404z"
        fill="currentColor"
      />
    </svg>
  `;
};
