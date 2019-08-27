import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextRomanUppercase = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Roman Uppercase',
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
      aria-labelledby="${`title-TextRomanUppercase-${count}`}"
      aria-describedby="${`title-TextRomanUppercase-${count}`}"
    >
      <title id="${`title-TextRomanUppercase-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextRomanUppercase-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="26" x="18" y="8" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="24" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="40" />
      <rect height="12" rx=".5" ry=".5" width="2" x="10" y="2" />
      <rect height="12" rx=".5" ry=".5" width="2" x="12" y="18" />
      <rect height="12" rx=".5" ry=".5" width="2" x="8" y="18" />
      <rect height="12" rx=".5" ry=".5" width="2" x="12" y="34" />
      <rect height="12" rx=".5" ry=".5" width="2" x="8" y="34" />
      <rect height="12" rx=".5" ry=".5" width="2" x="4" y="34" />
    </svg>
  `;
};
