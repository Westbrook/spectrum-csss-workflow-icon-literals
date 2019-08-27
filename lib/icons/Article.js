import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Article = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Article',
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
      aria-labelledby="${`title-Article-${count}`}"
      aria-describedby="${`title-Article-${count}`}"
    >
      <title id="${`title-Article-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Article-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H6V10h36z" />
      <path d="M10 14h14v12H10zm18 0h10v4H28zm0 8h10v4H28zm0 8h10v4H28zm-18 0h14v4H10z" />
    </svg>
  `;
};
