import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ExcludeOverlap = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Exclude Overlap',
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
      aria-labelledby="${`title-ExcludeOverlap-${count}`}"
      aria-describedby="${`title-ExcludeOverlap-${count}`}"
    >
      <title id="${`title-ExcludeOverlap-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ExcludeOverlap-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M42 16H32v14a2 2 0 01-2 2H16v10a2 2 0 002 2h24a2 2 0 002-2V18a2 2 0 00-2-2z" />
      <path d="M32 16V6a2 2 0 00-2-2H6a2 2 0 00-2 2v24a2 2 0 002 2h10V18a2 2 0 012-2z" />
    </svg>
  `;
};
