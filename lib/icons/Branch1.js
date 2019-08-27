import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Branch1 = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Branch1',
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
      aria-labelledby="${`title-Branch1-${count}`}"
      aria-describedby="${`title-Branch1-${count}`}"
    >
      <title id="${`title-Branch1-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Branch1-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 24a7.984 7.984 0 00-6.154 2.889L17.81 19.737a8 8 0 10-1.816 3.563l14.145 7.208A8 8 0 1038 24zm0 12.2a4.2 4.2 0 114.2-4.2 4.2 4.2 0 01-4.2 4.2z"
        fill="currentColor"
      />
    </svg>
  `;
};
