import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudError = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Error',
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
      aria-labelledby="${`title-CloudError-${count}`}"
      aria-describedby="${`title-CloudError-${count}`}"
    >
      <title id="${`title-CloudError-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CloudError-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.946 38H27.61a11.995 11.995 0 019.98-17.99s-.01-.947-.01-1.476A10.31 10.31 0 0027.124 8c-5.392 0-9.008 4.182-10.274 8.499a10.404 10.404 0 00-2.839-.396 8.492 8.492 0 00-8.657 8.282 6.627 6.627 0 00.18 2.15C2.426 26.535 0 29.987 0 32.347 0 35.748 1.774 38 4.946 38z"
      />
      <path
        d="M38 22a10 10 0 1010 10 10.01 10.01 0 00-10-10zm-1.487 3.2c0-.071.2-.182.346-.238a3.026 3.026 0 011.1-.117 3.837 3.837 0 011.16.117c.15.056.368.184.368.238v1.849a57.38 57.38 0 01-.488 6.371c0 .055-.038.33-.218.33h-1.565c-.12 0-.195-.259-.223-.33-.06-.508-.48-4.36-.48-6.371zM38 38.882a1.65 1.65 0 111.652-1.652A1.652 1.652 0 0138 38.882z"
      />
    </svg>
  `;
};
