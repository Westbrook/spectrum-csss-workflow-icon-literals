import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RemoveCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Remove Circle',
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
      aria-labelledby="${`title-RemoveCircle-${count}`}"
      aria-describedby="${`title-RemoveCircle-${count}`}"
    >
      <title id="${`title-RemoveCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RemoveCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zM36 25a1 1 0 01-1 1H13a1 1 0 01-1-1v-2a1 1 0 011-1h22a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
