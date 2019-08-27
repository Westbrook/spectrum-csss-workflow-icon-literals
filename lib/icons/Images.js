import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Images = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Images',
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
      aria-labelledby="${`title-Images-${count}`}"
      aria-describedby="${`title-Images-${count}`}"
    >
      <title id="${`title-Images-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Images-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.406 22a3.5 3.5 0 11-3.5-3.5 3.5 3.5 0 013.5 3.5zM40 6a2 2 0 00-2-2H2a2 2 0 00-2 2v28a2 2 0 002 2h2V8h36z"
      />
      <path
        d="M46 12H10a2 2 0 00-2 2v28a2 2 0 002 2h36a2 2 0 002-2V14a2 2 0 00-2-2zm-2 24.9l-6.225-6.225a2.362 2.362 0 00-3.34 0L30.809 34.3l-8.923-8.923a2.361 2.361 0 00-3.339 0L12 31.922V16h32z"
      />
    </svg>
  `;
};
