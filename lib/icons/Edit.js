import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Edit = ({ width = 24, height = 24, hidden = false, title = 'Edit', desc } = {}) => {
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
      aria-labelledby="${`title-Edit-${count}`}"
      aria-describedby="${`title-Edit-${count}`}"
    >
      <title id="${`title-Edit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Edit-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M17.054 37.145c-3.1 1.116-6.975 2.517-9.652 3.475l3.456-9.653zm16.64-32.727L8.82 29.292a2.233 2.233 0 00-.521.814L4.115 41.659a1.655 1.655 0 002.171 2.186L17.9 39.713a2.231 2.231 0 00.827-.526L43.59 14.274a1.887 1.887 0 00.173-2.653l-7.42-7.382a1.889 1.889 0 00-2.649.179z"
        fill="currentColor"
      />
    </svg>
  `;
};
