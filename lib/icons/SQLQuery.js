import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SQLQuery = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'SQLQuery',
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
      aria-labelledby="${`title-SQLQuery-${count}`}"
      aria-describedby="${`title-SQLQuery-${count}`}"
    >
      <title id="${`title-SQLQuery-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SQLQuery-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47.32 44.084L40.537 37.3a10.095 10.095 0 10-3.394 3.394l6.784 6.785c.469.469 2.505.89 3.395 0a2.445 2.445 0 000-3.395zM25.8 32.158a6.2 6.2 0 116.2 6.2 6.2 6.2 0 01-6.2-6.2zM22 16.5c11.046 0 20-2.798 20-6.25S33.046 4 22 4 2 6.798 2 10.25s8.954 6.25 20 6.25zm14.032 2.256a14.01 14.01 0 015.912 3.561 2.018 2.018 0 00.056-.346V15.5c-1.136 1.435-3.336 2.492-5.968 3.256zM18 32.158c0-.055.008-.108.008-.162-6.237-.467-14.196-1.97-16.008-4.844v10.6C2 41.2 10.954 44 22 44c.841 0 1.665-.021 2.479-.053A13.99 13.99 0 0118 32.158zm.598-4.034a14.049 14.049 0 015.75-7.675c-.831.034-1.623.051-2.348.051-6.17 0-17.765-1.461-20-5v6.471c0 3.088 7.176 5.647 16.598 6.153z"
        fill="currentColor"
      />
    </svg>
  `;
};
