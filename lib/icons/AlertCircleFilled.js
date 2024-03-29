import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AlertCircleFilled = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Alert Circle Filled',
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
      aria-labelledby="${`title-AlertCircleFilled-${count}`}"
      aria-describedby="${`title-AlertCircleFilled-${count}`}"
    >
      <title id="${`title-AlertCircleFilled-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AlertCircleFilled-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4a20 20 0 1020 20A20 20 0 0024 4zm-2.86 6.955a.594.594 0 01.278-.588 7.4 7.4 0 012.563-.517 8.042 8.042 0 012.594.391.666.666 0 01.332.589v2.981c0 3.518-.7 13.231-.83 14.511 0 .242-.155.385-.439.385h-3.313a.418.418 0 01-.435-.365c-.12-1.62-.75-11.05-.75-14.406zm2.841 27.2a2.872 2.872 0 01-3.131-2.926 2.97 2.97 0 013.131-3.006 2.938 2.938 0 013.132 3.006 2.843 2.843 0 01-3.132 2.921z"
        fill="currentColor"
      />
    </svg>
  `;
};
