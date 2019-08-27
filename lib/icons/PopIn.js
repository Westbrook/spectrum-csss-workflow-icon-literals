import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PopIn = ({ width = 24, height = 24, hidden = false, title = 'Pop In', desc } = {}) => {
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
      aria-labelledby="${`title-PopIn-${count}`}"
      aria-describedby="${`title-PopIn-${count}`}"
    >
      <title id="${`title-PopIn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PopIn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M13.731 22.955L31.287 5.4a2 2 0 012.828 0l8.485 8.484a2 2 0 010 2.828L25.045 34.269l6.024 6.024A1 1 0 0130.362 42H6V17.638a1 1 0 011.707-.707z"
        fill="currentColor"
      />
    </svg>
  `;
};
