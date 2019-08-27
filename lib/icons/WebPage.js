import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const WebPage = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Web Page',
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
      aria-labelledby="${`title-WebPage-${count}`}"
      aria-describedby="${`title-WebPage-${count}`}"
    >
      <title id="${`title-WebPage-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-WebPage-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32H6V14h36z"
        fill="currentColor"
      />
    </svg>
  `;
};
