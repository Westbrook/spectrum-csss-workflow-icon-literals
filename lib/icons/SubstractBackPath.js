import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SubstractBackPath = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Substract Back Path',
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
      aria-labelledby="${`title-SubstractBackPath-${count}`}"
      aria-describedby="${`title-SubstractBackPath-${count}`}"
    >
      <title id="${`title-SubstractBackPath-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SubstractBackPath-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 16H32V6a2 2 0 00-2-2H6a2 2 0 00-2 2v24a2 2 0 002 2h10v10a2 2 0 002 2h24a2 2 0 002-2V18a2 2 0 00-2-2zM28 28H8V8h20z"
        fill="currentColor"
      />
    </svg>
  `;
};
