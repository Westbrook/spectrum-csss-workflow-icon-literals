import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Refresh = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Refresh',
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
      aria-labelledby="${`title-Refresh-${count}`}"
      aria-describedby="${`title-Refresh-${count}`}"
    >
      <title id="${`title-Refresh-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Refresh-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.142 28a1.007 1.007 0 00-.944.686 13.981 13.981 0 01-22.353 5.883l4.862-4.862a.978.978 0 00.295-.7A1 1 0 0020 28H6.5a.5.5 0 00-.5.5V42a1 1 0 001.007 1 .978.978 0 00.7-.3l3.893-3.886a19.972 19.972 0 0032.758-9.77.847.847 0 00-.829-1.044zM25 10a13.9 13.9 0 019.156 3.432l-4.861 4.861a.978.978 0 00-.295.7A1 1 0 0030 20h13.5a.5.5 0 00.5-.5V6a1 1 0 00-1.007-1 .978.978 0 00-.7.295l-3.9 3.9a19.968 19.968 0 00-32.752 9.761.847.847 0 00.83 1.044h4.387a1.007 1.007 0 00.944-.686A14.007 14.007 0 0125 10z"
      />
    </svg>
  `;
};
