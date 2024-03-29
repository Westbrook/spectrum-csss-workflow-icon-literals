import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Segmentation = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Segmentation',
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
      aria-labelledby="${`title-Segmentation-${count}`}"
      aria-describedby="${`title-Segmentation-${count}`}"
    >
      <title id="${`title-Segmentation-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Segmentation-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="24" r="6.25" />
      <path
        d="M40.525 9.509A21.94 21.94 0 0026 2.1v9.574a12.433 12.433 0 016.785 3.463zm-5.392 8.867A12.438 12.438 0 0136.318 22h9.587a21.85 21.85 0 00-3.019-9.262zM11.242 41.9l4.813-8.251A12.489 12.489 0 0122 11.675V2.1a21.978 21.978 0 00-10.758 39.8zM36.325 26a12.46 12.46 0 01-16.81 9.657L14.7 43.915A21.95 21.95 0 0045.9 26z"
      />
    </svg>
  `;
};
