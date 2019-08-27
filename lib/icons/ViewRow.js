import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewRow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Row',
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
      aria-labelledby="${`title-ViewRow-${count}`}"
      aria-describedby="${`title-ViewRow-${count}`}"
    >
      <title id="${`title-ViewRow-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewRow-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 16H4V8a2 2 0 012-2h34a2 2 0 012 2zM4 20h38v10H4zm36 24H6a2 2 0 01-2-2v-8h38v8a2 2 0 01-2 2z"
      />
    </svg>
  `;
};
