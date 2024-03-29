import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const NoEdit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'No Edit',
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
      aria-labelledby="${`title-NoEdit-${count}`}"
      aria-describedby="${`title-NoEdit-${count}`}"
    >
      <title id="${`title-NoEdit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-NoEdit-${count}`}">${desc}</desc>
          `
        : html``}
      <rect
        height="56.215"
        rx="1"
        ry="1"
        transform="rotate(-45 23.875 23.875)"
        width="4"
        x="21.876"
        y="-4.233"
      />
      <path
        d="M33.146 24.738L43.59 14.273a1.886 1.886 0 00.173-2.653l-7.42-7.382a1.889 1.889 0 00-2.649.18L23.26 14.852zm-18.293-1.479L8.82 29.292a2.225 2.225 0 00-.521.814L4.116 41.658a1.654 1.654 0 002.171 2.186L17.9 39.712a2.223 2.223 0 00.826-.526l6.022-6.033zM7.4 40.62l3.455-9.654 6.2 6.179c-3.1 1.116-6.975 2.516-9.655 3.475z"
      />
    </svg>
  `;
};
