import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EmailLightning = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Email Lightning',
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
      aria-labelledby="${`title-EmailLightning-${count}`}"
      aria-describedby="${`title-EmailLightning-${count}`}"
    >
      <title id="${`title-EmailLightning-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-EmailLightning-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.071 9.928A19.9 19.9 0 1017.832 42.9L23 26h-9l4-16h12.657L26 20h10L19.187 43.288a19.885 19.885 0 0018.884-33.36z"
        fill="currentColor"
      />
    </svg>
  `;
};
