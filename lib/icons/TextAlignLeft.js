import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextAlignLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Align Left',
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
      aria-labelledby="${`title-TextAlignLeft-${count}`}"
      aria-describedby="${`title-TextAlignLeft-${count}`}"
    >
      <title id="${`title-TextAlignLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextAlignLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="38" x="4" y="6" />
      <rect height="4" rx="1" ry="1" width="30" x="4" y="16" />
      <rect height="4" rx="1" ry="1" width="38" x="4" y="26" />
      <rect height="4" rx="1" ry="1" width="30" x="4" y="36" />
    </svg>
  `;
};
