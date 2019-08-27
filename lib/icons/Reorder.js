import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Reorder = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Reorder',
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
      aria-labelledby="${`title-Reorder-${count}`}"
      aria-describedby="${`title-Reorder-${count}`}"
    >
      <title id="${`title-Reorder-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Reorder-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M25 4a.994.994 0 00-.747.336l-14 14a.979.979 0 00-.255.658A1 1 0 0011 20h28a1 1 0 001-1.006.979.979 0 00-.255-.658l-14-14A1 1 0 0025 4zm0 40a1 1 0 00.747-.336l14-14a.979.979 0 00.253-.658A1 1 0 0039 28H11a1 1 0 00-1 1.006.979.979 0 00.255.658l14 14A.994.994 0 0025 44z"
      />
    </svg>
  `;
};
