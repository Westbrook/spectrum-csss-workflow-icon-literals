import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Select = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select',
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
      aria-labelledby="${`title-Select-${count}`}"
      aria-describedby="${`title-Select-${count}`}"
    >
      <title id="${`title-Select-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Select-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 32h16.059a1 1 0 00.7-1.712L13.7 1.676a1 1 0 00-1.7.712v41.2a1 1 0 001.707.707z"
        fill="currentColor"
      />
    </svg>
  `;
};
