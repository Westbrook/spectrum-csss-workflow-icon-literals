import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Cancel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cancel',
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
      aria-labelledby="${`title-Cancel-${count}`}"
      aria-describedby="${`title-Cancel-${count}`}"
    >
      <title id="${`title-Cancel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Cancel-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zM7.9 24a16.008 16.008 0 013.4-9.867L33.867 36.7A16.074 16.074 0 017.9 24zm28.8 9.867L14.133 11.305A16.074 16.074 0 0136.7 33.867z"
        fill="currentColor"
      />
    </svg>
  `;
};
