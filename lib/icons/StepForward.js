import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const StepForward = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Step Forward',
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
      aria-labelledby="${`title-StepForward-${count}`}"
      aria-describedby="${`title-StepForward-${count}`}"
    >
      <title id="${`title-StepForward-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-StepForward-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="2" ry="2" width="12" x="2" y="4" />
      <path
        d="M22 42.133V5.867a2 2 0 013.257-1.556l21.709 18.133a2 2 0 010 3.112L25.257 43.689A2 2 0 0122 42.133z"
      />
    </svg>
  `;
};
