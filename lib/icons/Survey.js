import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Survey = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Survey',
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
      aria-labelledby="${`title-Survey-${count}`}"
      aria-describedby="${`title-Survey-${count}`}"
    >
      <title id="${`title-Survey-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Survey-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27.052 16.462a5.218 5.218 0 01-1.891 4.077c-1.152 1.093-2.245 2.068-2.245 2.954a3.116 3.116 0 00.473 1.625.127.127 0 01-.119.207H20.7a.494.494 0 01-.384-.119 3.232 3.232 0 01-.709-2.038c0-1.389.857-2.275 2.275-3.692.974-.975 1.536-1.595 1.536-2.511 0-1.064-.709-1.8-2.511-1.8a7.517 7.517 0 00-3.723.974c-.118.059-.236 0-.236-.118v-2.868c0-.118 0-.236.118-.295a9.373 9.373 0 014.491-1.034c3.543 0 5.495 2.038 5.495 4.638zm19.934 12.331l-5.765-5.765a1.111 1.111 0 00-.816-.36c-.013 0-.1-.012-.11-.012a1.35 1.35 0 00-.906.426L25.705 36.767a.986.986 0 00-.251.421l-2.778 9.305c-.114.377.459.851.783.851a.293.293 0 00.061-.006c.277-.064 7.867-2.345 9.312-2.779a.984.984 0 00.414-.249l13.686-13.685a1.375 1.375 0 00.4-.884 1.221 1.221 0 00-.346-.948zm-21.7 15.94L27.3 38l4.72 4.708c-2.163.651-4.864 1.467-6.731 2.025z"
      />
      <path
        d="M21.036 38H8V8h28v12.815l.562-.561A5.328 5.328 0 0140 18.681V5a1 1 0 00-1-1H5a1 1 0 00-1 1v36a1 1 0 001 1h14.843z"
      />
      <path
        d="M19.755 29.756a2.068 2.068 0 014.135 0 1.909 1.909 0 01-2.067 2.068 1.938 1.938 0 01-2.068-2.068z"
      />
    </svg>
  `;
};
