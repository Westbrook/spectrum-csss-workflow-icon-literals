import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateRightOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate Right Outline',
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
      aria-labelledby="${`title-RotateRightOutline-${count}`}"
      aria-describedby="${`title-RotateRightOutline-${count}`}"
    >
      <title id="${`title-RotateRightOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RotateRightOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27 2h5a10 10 0 0110 10v4h4.2a.8.8 0 01.8.806.785.785 0 01-.236.56l-6.435 6.488a.5.5 0 01-.707 0l-6.386-6.488a.785.785 0 01-.236-.56.8.8 0 01.8-.806H38v-4.387A5.613 5.613 0 0032.387 6H27a1 1 0 01-1-1V3a1 1 0 011-1zM4 18h22v22H4zm-2-4a2 2 0 00-2 2v26a2 2 0 002 2h26a2 2 0 002-2V16a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
