import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewColumn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Column',
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
      aria-labelledby="${`title-ViewColumn-${count}`}"
      aria-describedby="${`title-ViewColumn-${count}`}"
    >
      <title id="${`title-ViewColumn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewColumn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 8v34a2 2 0 002 2h8V6H6a2 2 0 00-2 2zm14-2h10v38H18zm22 0h-8v38h8a2 2 0 002-2V8a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
