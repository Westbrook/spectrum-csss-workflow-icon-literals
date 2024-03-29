import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const JourneyData = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Journey Data',
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
      aria-labelledby="${`title-JourneyData-${count}`}"
      aria-describedby="${`title-JourneyData-${count}`}"
    >
      <title id="${`title-JourneyData-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-JourneyData-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 22c5.421 0 9.817 1.708 9.817 3.817s-4.4 3.817-9.817 3.817-9.817-1.708-9.817-3.817S32.579 22 38 22zm9.717 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v4.454C28 36.092 32.579 38 38 38s10-1.908 10-3.546V30zm0 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v6.454C28 46.092 32.579 48 38 48s10-1.908 10-3.546V38z"
      />
      <path
        d="M24 34V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20v8a7.991 7.991 0 004 6.921zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"
      />
    </svg>
  `;
};
