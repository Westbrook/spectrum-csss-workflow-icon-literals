import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Measure = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Measure',
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
      aria-labelledby="${`title-Measure-${count}`}"
      aria-describedby="${`title-Measure-${count}`}"
    >
      <title id="${`title-Measure-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Measure-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.385 19.757l-9.546-9.546a.5.5 0 00-.707 0l-2.122 2.122a.5.5 0 000 .707l9.546 9.546-7.071 7.071-5.3-5.3a.5.5 0 00-.707 0l-2.121 2.122a.5.5 0 000 .707l5.3 5.3-7.071 7.071-9.546-9.547a.5.5 0 00-.707 0l-2.122 2.122a.5.5 0 000 .707l9.546 9.546-4.242 4.242a2 2 0 01-2.829 0L1.373 35.314a2 2 0 010-2.829L32.485 1.372a2 2 0 012.829 0l11.313 11.314a2 2 0 010 2.829z"
        fill="currentColor"
      />
    </svg>
  `;
};
