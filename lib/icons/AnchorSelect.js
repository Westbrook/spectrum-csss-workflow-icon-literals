import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AnchorSelect = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Anchor Select',
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
      aria-labelledby="${`title-AnchorSelect-${count}`}"
      aria-describedby="${`title-AnchorSelect-${count}`}"
    >
      <title id="${`title-AnchorSelect-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AnchorSelect-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M15.8 9.074L35.224 28.2h-10.8l-1.113 1.113-7.511 7.513zm-2.793-7.688a1 1 0 00-1.007 1v41.2a1 1 0 001.007 1 .978.978 0 00.7-.3L26 32h16.059a1 1 0 00.7-1.712L13.7 1.675a.983.983 0 00-.693-.289z"
        fill="currentColor"
      />
    </svg>
  `;
};
