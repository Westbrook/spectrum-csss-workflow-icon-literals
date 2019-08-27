import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ColumnTwoA = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Column Two A',
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
      aria-labelledby="${`title-ColumnTwoA-${count}`}"
      aria-describedby="${`title-ColumnTwoA-${count}`}"
    >
      <title id="${`title-ColumnTwoA-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ColumnTwoA-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M6 6a2 2 0 00-2 2v34a2 2 0 002 2h16V6zm36 0H26v38h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
    </svg>
  `;
};
