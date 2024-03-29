import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Gauge3 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gauge3',
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
      aria-labelledby="${`title-Gauge3-${count}`}"
      aria-describedby="${`title-Gauge3-${count}`}"
    >
      <title id="${`title-Gauge3-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Gauge3-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 28.044a19.738 19.738 0 001.838 8.318.994.994 0 001.6.257l1.53-1.53a.991.991 0 00.207-1.079A15.656 15.656 0 0110.2 20.052a16.3 16.3 0 017.528-6.694l.129-1.671a6.1 6.1 0 011.067-2.967A19.99 19.99 0 004 28.044zM43.737 24.8A20.123 20.123 0 0029.064 8.7a6.094 6.094 0 011.078 2.983l.127 1.647a15.93 15.93 0 018.555 20.68.986.986 0 00.207 1.077l1.529 1.53a.994.994 0 001.6-.257 19.8 19.8 0 001.577-11.56zM24 8.271a1.575 1.575 0 00-1.57 1.454l-2.123 22.287A3.7 3.7 0 0024 36a3.7 3.7 0 003.693-3.988L25.57 9.725A1.575 1.575 0 0024 8.271z"
      />
    </svg>
  `;
};
