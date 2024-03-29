import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TrendInspect = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Trend Inspect',
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
      aria-labelledby="${`title-TrendInspect-${count}`}"
      aria-describedby="${`title-TrendInspect-${count}`}"
    >
      <title id="${`title-TrendInspect-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TrendInspect-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30.76 28.442a7.828 7.828 0 001.083-6.369l-.644.7-4.415-6.345c-.089-.033-.183-.055-.272-.085l-8.7 12.827a8.1 8.1 0 002.859 2.2l5.982-8.823zm11.57-12.418l5.488-6.115-2.644-2.441-4.681 5.241a20.017 20.017 0 011.837 3.315zM11.273 38.818l-1.546 1.727-4.909-9.636-4.727 3.546 1.874 3.178 1.581-1.36 6 11L14.091 41a19.652 19.652 0 01-2.818-2.182z"
      />
      <path
        d="M8 24a16 16 0 0024.991 13.233l9.888 9.888a3 3 0 004.242-4.242l-9.888-9.888A16 16 0 108 24zm3.9 0A12.1 12.1 0 1124 36.1 12.114 12.114 0 0111.9 24z"
      />
      <path
        d="M8 24a16 16 0 0024.991 13.233l9.888 9.888a3 3 0 004.242-4.242l-9.888-9.888A16 16 0 108 24zm3.9 0A12.1 12.1 0 1124 36.1 12.114 12.114 0 0111.9 24z"
      />
    </svg>
  `;
};
