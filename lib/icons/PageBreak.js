import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PageBreak = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Page Break',
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
      aria-labelledby="${`title-PageBreak-${count}`}"
      aria-describedby="${`title-PageBreak-${count}`}"
    >
      <title id="${`title-PageBreak-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PageBreak-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 18v12h12L28 18z" />
      <path
        d="M40 46V34H26a2 2 0 01-2-2V18H10a2 2 0 00-2 2v26zM8 2v10a2 2 0 002 2h28a2 2 0 002-2V2z"
      />
    </svg>
  `;
};
