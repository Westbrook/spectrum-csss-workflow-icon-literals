import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Circle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Circle',
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
      aria-labelledby="${`title-Circle-${count}`}"
      aria-describedby="${`title-Circle-${count}`}"
    >
      <title id="${`title-Circle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Circle-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="24" r="19.9" fill="currentColor" />
    </svg>
  `;
};
