import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PaddingTop = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Padding Top',
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
      aria-labelledby="${`title-PaddingTop-${count}`}"
      aria-describedby="${`title-PaddingTop-${count}`}"
    >
      <title id="${`title-PaddingTop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PaddingTop-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M40 8v32H8V8zm2-4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2z" />
      <rect height="10" rx="1" ry="1" transform="rotate(180 24 15)" width="28" x="10" y="10" />
    </svg>
  `;
};
