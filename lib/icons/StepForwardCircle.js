import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StepForwardCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Step Forward Circle',
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
      aria-labelledby="${`title-StepForwardCircle-${count}`}"
      aria-describedby="${`title-StepForwardCircle-${count}`}"
    >
      <title id="${`title-StepForwardCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StepForwardCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zM20 33a1 1 0 01-1 1h-4a1 1 0 01-1-1V15a1 1 0 011-1h4a1 1 0 011 1zm5.581.83A1 1 0 0124 33.017V14.983a1 1 0 011.581-.813L38.2 23.187a1 1 0 010 1.626z"
        fill="currentColor"
      />
    </svg>
  `;
};
