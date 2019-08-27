import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloseCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Close Circle',
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
      aria-labelledby="${`title-CloseCircle-${count}`}"
      aria-describedby="${`title-CloseCircle-${count}`}"
    >
      <title id="${`title-CloseCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CloseCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.071 9.928a19.9 19.9 0 100 28.143 19.9 19.9 0 000-28.143zm-6.294 23.547a1 1 0 01-1.414 0L24 27.111l-6.364 6.364a1 1 0 01-1.414 0l-1.7-1.7a1 1 0 010-1.414L20.888 24l-6.363-6.363a1 1 0 010-1.415l1.7-1.7a1 1 0 011.414 0L24 20.888l6.364-6.363a1 1 0 011.415 0l1.695 1.7a1 1 0 010 1.414L27.112 24l6.362 6.363a1 1 0 010 1.414z"
        fill="currentColor"
      />
    </svg>
  `;
};
