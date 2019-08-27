import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Campaign = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Campaign',
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
      aria-labelledby="${`title-Campaign-${count}`}"
      aria-describedby="${`title-Campaign-${count}`}"
    >
      <title id="${`title-Campaign-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Campaign-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="24" r="6" />
      <path
        d="M10.157 26H4.1A20 20 0 0022 43.9v-6.06A14.013 14.013 0 0110.157 26zm0-4A14.013 14.013 0 0122 10.16V4.1A20 20 0 004.1 22zm27.685 0H43.9A20 20 0 0026 4.1v6.06A14.013 14.013 0 0137.842 22zm0 4A14.013 14.013 0 0126 37.84v6.06A20 20 0 0043.9 26z"
      />
    </svg>
  `;
};
