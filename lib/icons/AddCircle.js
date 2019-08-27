import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AddCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Add Circle',
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
      aria-labelledby="${`title-AddCircle-${count}`}"
      aria-describedby="${`title-AddCircle-${count}`}"
    >
      <title id="${`title-AddCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AddCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zM36 25a1 1 0 01-1 1h-9v9a1 1 0 01-1 1h-2a1 1 0 01-1-1v-9h-9a1 1 0 01-1-1v-2a1 1 0 011-1h9v-9a1 1 0 011-1h2a1 1 0 011 1v9h9a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
