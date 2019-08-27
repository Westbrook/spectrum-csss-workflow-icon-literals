import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StepBackward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Step Backward',
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
      aria-labelledby="${`title-StepBackward-${count}`}"
      aria-describedby="${`title-StepBackward-${count}`}"
    >
      <title id="${`title-StepBackward-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StepBackward-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="2" ry="2" width="12" x="34" y="4" />
      <path
        d="M26 42.133V5.867a2 2 0 00-3.257-1.556L1.034 22.444a2 2 0 000 3.112l21.709 18.133A2 2 0 0026 42.133z"
      />
    </svg>
  `;
};
