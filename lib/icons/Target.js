import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Target = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Target',
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
      aria-labelledby="${`title-Target-${count}`}"
      aria-describedby="${`title-Target-${count}`}"
    >
      <title id="${`title-Target-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Target-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 10a14 14 0 11-14 14 14.015 14.015 0 0114-14zm0-6a20 20 0 1020 20A20 20 0 0024 4z"
      />
      <circle cx="24" cy="24" r="6" />
    </svg>
  `;
};
