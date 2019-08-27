import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MarginRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Margin Right',
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
      aria-labelledby="${`title-MarginRight-${count}`}"
      aria-describedby="${`title-MarginRight-${count}`}"
    >
      <title id="${`title-MarginRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MarginRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M8 8h16v32H8zM4 6v36a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
      <rect height="12" rx="2" ry="2" transform="rotate(-90 38 24)" width="40" x="18" y="18" />
    </svg>
  `;
};
