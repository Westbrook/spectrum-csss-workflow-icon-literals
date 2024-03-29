import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShowAllLayers = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Show All Layers',
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
      aria-labelledby="${`title-ShowAllLayers-${count}`}"
      aria-describedby="${`title-ShowAllLayers-${count}`}"
    >
      <title id="${`title-ShowAllLayers-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShowAllLayers-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.842 35.724l-7.092-3.553L24 38.558l-12.75-6.387-7.092 3.553a.5.5 0 000 .894l19.394 9.716a1 1 0 00.9 0l19.394-9.716a.5.5 0 00-.004-.894z"
      />
      <path
        d="M43.842 23.724l-7.092-3.553L24 26.558l-12.75-6.387-7.092 3.553a.5.5 0 000 .894l19.394 9.716a1 1 0 00.9 0l19.394-9.716a.5.5 0 00-.004-.894z"
      />
      <path
        d="M23.552 22.334L4.158 12.618a.5.5 0 010-.894l19.394-9.716a1 1 0 01.9 0l19.394 9.716a.5.5 0 010 .894l-19.398 9.716a1 1 0 01-.896 0z"
      />
    </svg>
  `;
};
