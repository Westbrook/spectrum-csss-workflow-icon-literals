import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PageRule = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Page Rule',
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
      aria-labelledby="${`title-PageRule-${count}`}"
      aria-describedby="${`title-PageRule-${count}`}"
    >
      <title id="${`title-PageRule-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PageRule-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M46 4H2a2 2 0 00-2 2v32a2 2 0 002 2h44a2 2 0 002-2V6a2 2 0 00-2-2zm-2 32H4V8h40z" />
      <rect height="4" rx="1" ry="1" width="32" x="8" y="12" />
    </svg>
  `;
};
