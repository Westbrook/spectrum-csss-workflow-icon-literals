import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const NewsAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'News Add',
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
      aria-labelledby="${`title-NewsAdd-${count}`}"
      aria-describedby="${`title-NewsAdd-${count}`}"
    >
      <title id="${`title-NewsAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-NewsAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30 12h10v4H30zm-14 0h10v12H16zm8.1 24A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm13.4-8a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5zm-15.342 0H16v4h4.524a15.87 15.87 0 011.634-4z"
      />
      <path
        d="M20 36h-8V8h32v14.158a16.046 16.046 0 014 3.283V5a1 1 0 00-1-1H9a1 1 0 00-1 1v29a2 2 0 01-4 0V9a1 1 0 00-1-1H1a1 1 0 00-1 1v25a6 6 0 006 6h14.524A15.986 15.986 0 0120 36z"
      />
    </svg>
  `;
};
