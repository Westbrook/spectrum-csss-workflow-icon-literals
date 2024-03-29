import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextDecrease = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Decrease',
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
      aria-labelledby="${`title-TextDecrease-${count}`}"
      aria-describedby="${`title-TextDecrease-${count}`}"
    >
      <title id="${`title-TextDecrease-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextDecrease-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47.9 36A11.9 11.9 0 1036 47.9 11.9 11.9 0 0047.9 36zm-5.165-2.9l-6.312 9.989a.5.5 0 01-.846 0L29.265 33.1a.668.668 0 01.5-1.108h12.466a.668.668 0 01.504 1.108z"
      />
      <path
        d="M20.239 38A21.4 21.4 0 0120 34V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H2a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h10.28a15.814 15.814 0 01-1.041-4z"
      />
    </svg>
  `;
};
