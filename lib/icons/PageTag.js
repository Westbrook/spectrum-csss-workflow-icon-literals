import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PageTag = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Page Tag',
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
      aria-labelledby="${`title-PageTag-${count}`}"
      aria-describedby="${`title-PageTag-${count}`}"
    >
      <title id="${`title-PageTag-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PageTag-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M19.957 38H4V14h36v7.958l4 4V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h21.957z" />
      <path
        d="M47.614 35.227L34.679 22.293a1 1 0 00-.707-.293H23a1 1 0 00-1 1v10.972a1 1 0 00.293.707l12.934 12.935a1 1 0 001.414 0l10.973-10.972a1 1 0 000-1.415zm-20.6-5.214a3 3 0 113-3 3 3 0 01-3.001 3z"
      />
    </svg>
  `;
};
