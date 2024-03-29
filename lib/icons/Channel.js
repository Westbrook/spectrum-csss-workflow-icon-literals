import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Channel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Channel',
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
      aria-labelledby="${`title-Channel-${count}`}"
      aria-describedby="${`title-Channel-${count}`}"
    >
      <title id="${`title-Channel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Channel-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.167 20.167a3.817 3.817 0 00-3.3 1.916h-6.061a9.946 9.946 0 00-3.56-5.835l3.494-6.639a3.838 3.838 0 10-3.394-1.781l-3.492 6.636A9.874 9.874 0 0024 14a9.881 9.881 0 00-2.855.464l-3.492-6.636a3.831 3.831 0 10-3.394 1.781l3.5 6.639a9.947 9.947 0 00-3.561 5.835H8.134a3.833 3.833 0 100 3.834h6.059a9.947 9.947 0 003.561 5.835l-3.5 6.639a3.841 3.841 0 103.394 1.781l3.492-6.636A9.881 9.881 0 0024 34a9.874 9.874 0 002.854-.464l3.492 6.636a3.832 3.832 0 103.394-1.781l-3.494-6.639a9.946 9.946 0 003.56-5.835h6.059a3.827 3.827 0 103.3-5.75zM24 30.1a6.1 6.1 0 116.1-6.1 6.1 6.1 0 01-6.1 6.1z"
        fill="currentColor"
      />
    </svg>
  `;
};
