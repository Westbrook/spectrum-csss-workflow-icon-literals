import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LinkPage = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Link Page',
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
      aria-labelledby="${`title-LinkPage-${count}`}"
      aria-describedby="${`title-LinkPage-${count}`}"
    >
      <title id="${`title-LinkPage-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LinkPage-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M23 24h24a1 1 0 011 1v22a1 1 0 01-1 1H23a1 1 0 01-1-1V25a1 1 0 011-1zm21 6H26v14h18zM26.991 12c.8-.8 2.732-2.668 3.064-3A6.326 6.326 0 1139 17.945L36.947 20h6.472A11.049 11.049 0 0026.7 5.643c-.594.594-3.806 3.741-5.483 5.418a12.819 12.819 0 015.774.939z"
      />
      <path
        d="M18 38.946l-.055.054A6.326 6.326 0 019 30.055l8.214-8.214A7.068 7.068 0 0123.508 20h7.45a10.346 10.346 0 00-1.271-1.588 11.281 11.281 0 00-15.829.073L5.643 26.7A11.052 11.052 0 0018 44.6z"
      />
    </svg>
  `;
};
