import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoveTo = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Move To',
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
      aria-labelledby="${`title-MoveTo-${count}`}"
      aria-describedby="${`title-MoveTo-${count}`}"
    >
      <title id="${`title-MoveTo-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoveTo-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.057 19.843l-8.813 8.915a2 2 0 01-2.833.011l-7.137-7.108a2 2 0 010-2.831l8.885-8.886L26.213 8H4a2 2 0 00-2 2v32a2 2 0 002 2h34a2 2 0 002-2V21.786z"
      />
      <path
        d="M30.241 4a1.008 1.008 0 00-.655 1.716l4.228 4.228-9.842 9.842a.5.5 0 000 .707l3.535 3.535a.5.5 0 00.707 0l9.842-9.842 4.218 4.214a1 1 0 001.706-.655V4z"
      />
    </svg>
  `;
};
