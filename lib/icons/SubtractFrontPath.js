import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SubtractFrontPath = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Subtract Front Path',
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
      aria-labelledby="${`title-SubtractFrontPath-${count}`}"
      aria-describedby="${`title-SubtractFrontPath-${count}`}"
    >
      <title id="${`title-SubtractFrontPath-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SubtractFrontPath-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 16H32V6a2 2 0 00-2-2H6a2 2 0 00-2 2v24a2 2 0 002 2h10v10a2 2 0 002 2h24a2 2 0 002-2V18a2 2 0 00-2-2zm-2 24H20V20h20z"
        fill="currentColor"
      />
    </svg>
  `;
};
