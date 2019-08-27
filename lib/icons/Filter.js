import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Filter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter',
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
      aria-labelledby="${`title-Filter-${count}`}"
      aria-describedby="${`title-Filter-${count}`}"
    >
      <title id="${`title-Filter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Filter-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.885 4H5.119a1.464 1.464 0 00-1.136 2.388l16.1 19.671v18.417a1.463 1.463 0 002.459 1.073l4.93-5.444a1.464 1.464 0 00.49-1.093V26.027L44.021 6.388A1.464 1.464 0 0042.885 4z"
        fill="currentColor"
      />
    </svg>
  `;
};
