import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShareWindows = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Share Windows',
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
      aria-labelledby="${`title-ShareWindows-${count}`}"
      aria-describedby="${`title-ShareWindows-${count}`}"
    >
      <title id="${`title-ShareWindows-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShareWindows-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.468 21.059a17.446 17.446 0 00-1.614-5.666 9.781 9.781 0 01-3.471 3.11 13.2 13.2 0 01.7 3.022 12.969 12.969 0 01-2.179 8.706 6.585 6.585 0 102.97 3.4 17.348 17.348 0 003.594-12.572zM22.865 35.781a13.046 13.046 0 01-9.165-6.462 6.612 6.612 0 10-4.3 1.253 17.376 17.376 0 0014.47 9.764 9.914 9.914 0 01-1.005-4.555zM35.994 4.094a6.587 6.587 0 00-8.345 1.533 17.471 17.471 0 00-17.674 8.512 9.82 9.82 0 014.491 1.173 16 16 0 01.458-.613 12.982 12.982 0 018.783-4.784 13.357 13.357 0 011.409-.075c.344 0 .686.02 1.027.047a6.588 6.588 0 109.851-5.793z"
      />
    </svg>
  `;
};
