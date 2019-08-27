import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DividePath = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Divide Path',
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
      aria-labelledby="${`title-DividePath-${count}`}"
      aria-describedby="${`title-DividePath-${count}`}"
    >
      <title id="${`title-DividePath-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DividePath-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14 12h18V6a2 2 0 00-2-2H6a2 2 0 00-2 2v24a2 2 0 002 2h6V14a2 2 0 012-2z" />
      <path d="M32 16H18a2 2 0 00-2 2v14h14a2 2 0 002-2z" />
      <path d="M42 16h-6v18a2 2 0 01-2 2H16v6a2 2 0 002 2h24a2 2 0 002-2V18a2 2 0 00-2-2z" />
    </svg>
  `;
};
