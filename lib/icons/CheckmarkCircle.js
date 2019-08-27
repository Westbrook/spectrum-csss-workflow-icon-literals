import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CheckmarkCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Checkmark Circle',
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
      aria-labelledby="${`title-CheckmarkCircle-${count}`}"
      aria-describedby="${`title-CheckmarkCircle-${count}`}"
    >
      <title id="${`title-CheckmarkCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CheckmarkCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm12.562 12.587L22.018 35.341a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-7.785-7.8a1.2 1.2 0 010-1.7l1.326-1.325a1.2 1.2 0 011.7 0l5.338 5.356 12.408-15.9a1.2 1.2 0 011.692-.212L36.352 15a1.2 1.2 0 01.21 1.687z"
        fill="currentColor"
      />
    </svg>
  `;
};
