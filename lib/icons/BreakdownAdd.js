import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BreakdownAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Breakdown Add',
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
      aria-labelledby="${`title-BreakdownAdd-${count}`}"
      aria-describedby="${`title-BreakdownAdd-${count}`}"
    >
      <title id="${`title-BreakdownAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BreakdownAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
      <path
        d="M20.627 40H14v-4h6.1a15.843 15.843 0 011.18-6H14v-4h9.646a15.783 15.783 0 0116.273-5.393A1 1 0 0039 20H14V10h25a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h7v34a2 2 0 002 2h11.645a15.84 15.84 0 01-3.018-6z"
      />
    </svg>
  `;
};
