import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Magnify = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Magnify',
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
      aria-labelledby="${`title-Magnify-${count}`}"
      aria-describedby="${`title-Magnify-${count}`}"
    >
      <title id="${`title-Magnify-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Magnify-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.338 40.3L32.719 29.679a16.043 16.043 0 10-3.04 3.04L40.3 43.338a2.155 2.155 0 003.04-3.04zM20 32a12 12 0 1112-12 12 12 0 01-12 12z"
        fill="currentColor"
      />
    </svg>
  `;
};
