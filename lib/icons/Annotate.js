import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Annotate = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Annotate',
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
      aria-labelledby="${`title-Annotate-${count}`}"
      aria-describedby="${`title-Annotate-${count}`}"
    >
      <title id="${`title-Annotate-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Annotate-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M33.6 42l8.4-8.4h-7.9a.5.5 0 00-.5.5z" />
      <path
        d="M40 6H8a2 2 0 00-2 2v32a2 2 0 002 2h22V32a2 2 0 012-2h10V8a2 2 0 00-2-2zM25.5 34h-13a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zm10-8h-23a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h23a.5.5 0 01.5.5v3a.5.5 0 01-.5.5zm0-8h-23a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h23a.5.5 0 01.5.5v3a.5.5 0 01-.5.5z"
      />
    </svg>
  `;
};
