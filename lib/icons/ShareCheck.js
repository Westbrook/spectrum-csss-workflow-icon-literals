import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShareCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Share Check',
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
      aria-labelledby="${`title-ShareCheck-${count}`}"
      aria-describedby="${`title-ShareCheck-${count}`}"
    >
      <title id="${`title-ShareCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShareCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M21.722 6.331L16 0l-5.708 6.331A1 1 0 0011.035 8H14v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V8h2.979a1 1 0 00.743-1.669zM36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0zM28 22.275a15.8 15.8 0 014-1.648V9a1 1 0 00-1-1h-7v4h4z"
      />
      <path
        d="M22.275 28H4V12h4V8H1a1 1 0 00-1 1v22a1 1 0 001 1h19.627a15.788 15.788 0 011.648-4z"
      />
    </svg>
  `;
};
