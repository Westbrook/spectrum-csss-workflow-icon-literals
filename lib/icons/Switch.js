import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Switch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Switch',
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
      aria-labelledby="${`title-Switch-${count}`}"
      aria-describedby="${`title-Switch-${count}`}"
    >
      <title id="${`title-Switch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Switch-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34.854 10.854a.5.5 0 00-.854.353V18H14v-6.793a.5.5 0 00-.854-.353L.6 23l12.546 12.146a.5.5 0 00.854-.353V28h20v6.793a.5.5 0 00.854.353L47.4 23z"
        fill="currentColor"
      />
    </svg>
  `;
};
