import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphBubble = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Bubble',
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
      aria-labelledby="${`title-GraphBubble-${count}`}"
      aria-describedby="${`title-GraphBubble-${count}`}"
    >
      <title id="${`title-GraphBubble-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphBubble-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="13" cy="13" r="7" />
      <circle cx="10" cy="31.375" r="4" />
      <path d="M33.844 20.369a5.853 5.853 0 10-6.245.754 11.9 11.9 0 106.245-.754z" />
    </svg>
  `;
};
