import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextRomanLowercase = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Roman Lowercase',
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
      aria-labelledby="${`title-TextRomanLowercase-${count}`}"
      aria-describedby="${`title-TextRomanLowercase-${count}`}"
    >
      <title id="${`title-TextRomanLowercase-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextRomanLowercase-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="26" x="18" y="8" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="24" />
      <rect height="4" rx="1" ry="1" width="26" x="18" y="40" />
      <path
        d="M12 4V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V4zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V6zm4 14v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V20zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V22zm-2-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V20zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V22zm6 14v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V36zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V38zm-2-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V36zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V38zm-2-2v-1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V36zm-2 2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V38z"
      />
    </svg>
  `;
};
