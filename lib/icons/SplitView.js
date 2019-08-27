import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SplitView = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Split View',
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
      aria-labelledby="${`title-SplitView-${count}`}"
      aria-describedby="${`title-SplitView-${count}`}"
    >
      <title id="${`title-SplitView-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SplitView-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="2" ry="2" width="18" x="4" y="4.001" />
      <rect height="40" rx="2" ry="2" width="18" x="26" y="4.001" />
    </svg>
  `;
};
