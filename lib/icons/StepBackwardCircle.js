import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StepBackwardCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Step Backward Circle',
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
      aria-labelledby="${`title-StepBackwardCircle-${count}`}"
      aria-describedby="${`title-StepBackwardCircle-${count}`}"
    >
      <title id="${`title-StepBackwardCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StepBackwardCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.1 24A19.9 19.9 0 1024 4.1 19.9 19.9 0 004.1 24zM28 15a1 1 0 011-1h4a1 1 0 011 1v18a1 1 0 01-1 1h-4a1 1 0 01-1-1zM9.8 24.813a1 1 0 010-1.626l12.619-9.017a1 1 0 011.581.813v18.034a1 1 0 01-1.581.813z"
        fill="currentColor"
      />
    </svg>
  `;
};
