import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const RotateLeftOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Rotate Left Outline',
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
      aria-labelledby="${`title-RotateLeftOutline-${count}`}"
      aria-describedby="${`title-RotateLeftOutline-${count}`}"
    >
      <title id="${`title-RotateLeftOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-RotateLeftOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 18v22H22V18zm-24-4a2 2 0 00-2 2v26a2 2 0 002 2h26a2 2 0 002-2V16a2 2 0 00-2-2zm1-10h-5A10 10 0 006 14v4H1.8a.8.8 0 00-.8.806.785.785 0 00.236.56l6.435 6.488a.5.5 0 00.707 0l6.386-6.488a.785.785 0 00.236-.56.8.8 0 00-.8-.806H10v-4.387A5.613 5.613 0 0115.613 8H21a1 1 0 001-1V5a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
