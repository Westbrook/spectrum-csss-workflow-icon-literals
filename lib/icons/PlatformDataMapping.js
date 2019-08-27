import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PlatformDataMapping = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Platform Data Mapping',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-PlatformDataMapping-${count}`}"
      aria-describedby="${`title-PlatformDataMapping-${count}`}"
    >
      <title id="${`title-PlatformDataMapping-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PlatformDataMapping-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38.597 27.45A6.642 6.642 0 0031.006 32H12v-5.864a.667.667 0 00-1.106-.502l-9.13 7.99a.5.5 0 000 .752l9.13 7.99A.667.667 0 0012 41.864V36h19.006a6.654 6.654 0 107.591-8.55zm-31.195-8.9A6.642 6.642 0 0014.994 14H34v5.864a.667.667 0 001.106.502l9.13-7.99a.5.5 0 000-.752l-9.13-7.99A.667.667 0 0034 4.136V10H14.994a6.654 6.654 0 10-7.592 8.55z"
        fill="currentColor"
      />
    </svg>
  `;
};
