import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Layers = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Layers',
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
      aria-labelledby="${`title-Layers-${count}`}"
      aria-describedby="${`title-Layers-${count}`}"
    >
      <title id="${`title-Layers-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Layers-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.977 26.447l-12.411 8.611a.993.993 0 01-1.132 0l-12.411-8.611-7.166 4.972a.5.5 0 000 .821l19.577 13.583a.993.993 0 001.132 0L44.143 32.24a.5.5 0 000-.821z"
      />
      <path
        d="M23.434 30.164L3.858 16.581a.5.5 0 010-.821L23.434 2.177a.993.993 0 011.132 0L44.142 15.76a.5.5 0 010 .821L24.566 30.164a.99.99 0 01-1.132 0z"
      />
    </svg>
  `;
};
