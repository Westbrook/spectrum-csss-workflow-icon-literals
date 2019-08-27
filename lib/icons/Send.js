import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Send = ({ width = 24, height = 24, hidden = false, title = 'Send', desc } = {}) => {
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
      aria-labelledby="${`title-Send-${count}`}"
      aria-describedby="${`title-Send-${count}`}"
    >
      <title id="${`title-Send-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Send-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.194 6.424L2 19a1.065 1.065 0 00-.191 1.978l9.669 4.834zM16.078 28.042l16.149 8.143a1.064 1.064 0 001.444-.51L47.455 8.091zM12.066 31v10.185a.95.95 0 001.565.725l7.147-6.021z"
      />
    </svg>
  `;
};
