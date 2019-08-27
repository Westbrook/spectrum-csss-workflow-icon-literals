import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileSpace = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Space',
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
      aria-labelledby="${`title-FileSpace-${count}`}"
      aria-describedby="${`title-FileSpace-${count}`}"
    >
      <title id="${`title-FileSpace-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileSpace-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23 2C14.552 2 6 4.748 6 10v28c0 5.252 8.552 8 17 8s17-2.748 17-8V10c0-5.252-8.552-8-17-8zm13 36a1 1 0 01-.39.8C32.654 41.026 28.743 42 23 42s-9.654-.974-12.61-3.195A1 1 0 0110 38V15.328C13.281 17.091 18.153 18 23 18s9.719-.909 13-2.672zM23 14.2c-8.577 0-13-2.944-13-4.2s4.423-4.2 13-4.2S36 8.744 36 10s-4.423 4.2-13 4.2z"
      />
      <path d="M32 28c0-1.1-4.029-2-9-2s-9 .9-9 2v8c0 1.1 4.029 2.2 9 2.2s9-1.1 9-2.2z" />
    </svg>
  `;
};
