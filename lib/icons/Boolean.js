import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Boolean = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Boolean',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-Boolean-${count}`}"
      aria-describedby="${`title-Boolean-${count}`}"
    >
      <title id="${`title-Boolean-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Boolean-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 12a12 12 0 010 24H16a12 12 0 010-24zm0-4H16a16 16 0 000 32h16a16 16 0 000-32zm8 16a8 8 0 10-8 8 8 8 0 008-8z"
        fill="currentColor"
      />
    </svg>
  `;
};
