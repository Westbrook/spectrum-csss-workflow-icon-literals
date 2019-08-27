import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextSuperscript = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Superscript',
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
      aria-labelledby="${`title-TextSuperscript-${count}`}"
      aria-describedby="${`title-TextSuperscript-${count}`}"
    >
      <title id="${`title-TextSuperscript-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextSuperscript-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34 6H4a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1h-3V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2zm8.33 10c-.2 0-.26-.047-.26-.17V5.765a6.136 6.136 0 01-2.585 1c-.193.023-.257 0-.257-.147V4.144c0-.122.032-.17.194-.193a8.5 8.5 0 003.689-1.81 1.058 1.058 0 01.486-.1h2.241c.13 0 .162.047.162.167V15.83c0 .123-.063.17-.194.17z"
      />
    </svg>
  `;
};
