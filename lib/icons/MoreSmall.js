import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoreSmall = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'More Small',
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
      aria-labelledby="${`title-MoreSmall-${count}`}"
      aria-describedby="${`title-MoreSmall-${count}`}"
    >
      <title id="${`title-MoreSmall-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoreSmall-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="24" r="4.9" />
      <circle cx="40" cy="24" r="4.9" />
      <circle cx="8" cy="24" r="4.9" />
    </svg>
  `;
};
