import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextEdit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Edit',
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
      aria-labelledby="${`title-TextEdit-${count}`}"
      aria-describedby="${`title-TextEdit-${count}`}"
    >
      <title id="${`title-TextEdit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextEdit-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.986 28.793l-5.765-5.765a1.111 1.111 0 00-.816-.36c-.013 0-.1-.012-.11-.012a1.35 1.35 0 00-.906.426L25.705 36.767a.986.986 0 00-.251.421l-2.778 9.305c-.114.377.459.851.783.851a.293.293 0 00.061-.006c.277-.064 7.867-2.345 9.312-2.779a.984.984 0 00.414-.249l13.686-13.685a1.375 1.375 0 00.4-.884 1.221 1.221 0 00-.346-.948zm-21.7 15.94L27.3 38l4.72 4.708c-2.163.651-4.864 1.467-6.731 2.025zM21.036 38H20V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H2a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h8.843z"
      />
    </svg>
  `;
};
