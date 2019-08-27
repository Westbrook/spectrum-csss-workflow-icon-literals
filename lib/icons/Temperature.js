import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Temperature = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Temperature',
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
      aria-labelledby="${`title-Temperature-${count}`}"
      aria-describedby="${`title-Temperature-${count}`}"
    >
      <title id="${`title-Temperature-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Temperature-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M26 26.8V17a1 1 0 00-1-1h-2a1 1 0 00-1 1v9.8a7.5 7.5 0 104 0z" />
      <path
        d="M32 22.517V8a8 8 0 00-16 0v14.517a14 14 0 1016 0zM24 44.1a10.1 10.1 0 01-4-19.369V8a4 4 0 018 0v16.731A10.1 10.1 0 0124 44.1z"
      />
    </svg>
  `;
};
