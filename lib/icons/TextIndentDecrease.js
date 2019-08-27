import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextIndentDecrease = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Indent Decrease',
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
      aria-labelledby="${`title-TextIndentDecrease-${count}`}"
      aria-describedby="${`title-TextIndentDecrease-${count}`}"
    >
      <title id="${`title-TextIndentDecrease-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextIndentDecrease-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="32" x="12" y="6" />
      <rect height="4" rx="1" ry="1" width="20" x="24" y="14" />
      <rect height="4" rx="1" ry="1" width="20" x="24" y="22" />
      <rect height="4" rx="1" ry="1" width="20" x="24" y="30" />
      <rect height="4" rx="1" ry="1" width="32" x="12" y="38" />
      <path
        d="M10 20v-5.341a.5.5 0 00-.864-.343L0 24l9.136 9.684a.5.5 0 00.864-.343V28h9a1 1 0 001-1v-6a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
