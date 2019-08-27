import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LoupeView = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Loupe View',
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
      aria-labelledby="${`title-LoupeView-${count}`}"
      aria-describedby="${`title-LoupeView-${count}`}"
    >
      <title id="${`title-LoupeView-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LoupeView-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="2" ry="2" width="40" x="4" y="4.001" fill="currentColor" />
    </svg>
  `;
};
