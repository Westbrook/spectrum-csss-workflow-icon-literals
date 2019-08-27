import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Feedback = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Feedback',
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
      aria-labelledby="${`title-Feedback-${count}`}"
      aria-describedby="${`title-Feedback-${count}`}"
    >
      <title id="${`title-Feedback-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Feedback-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 6H10a6 6 0 00-6 6v16a6 6 0 006 6h2v9.593a1 1 0 001.707.707L24 34h14a6 6 0 006-6V12a6 6 0 00-6-6zM12 24.45A4.45 4.45 0 1116.45 20 4.45 4.45 0 0112 24.45zm12 0A4.45 4.45 0 1128.45 20 4.45 4.45 0 0124 24.45zm12 0A4.45 4.45 0 1140.45 20 4.45 4.45 0 0136 24.45z"
        fill="currentColor"
      />
    </svg>
  `;
};
