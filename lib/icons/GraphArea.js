import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphArea = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Area',
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
      aria-labelledby="${`title-GraphArea-${count}`}"
      aria-describedby="${`title-GraphArea-${count}`}"
    >
      <title id="${`title-GraphArea-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphArea-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.755 25.511L44 34v8a2 2 0 01-2 2H6a2 2 0 01-2-2V24l12.5 15 4.2-6.294a1 1 0 011.646-.027l5.404 7.571 10.289-14.861a1 1 0 011.716.122z"
      />
      <path
        d="M16.144 32.324l2.832-4.248A3 3 0 0123.913 28l3.787 5.3 8.974-12.962a3 3 0 015.15.366L44 25.055V4L34 16l-5.235-8.725a1 1 0 00-1.658-.085L11.993 27.343z"
      />
    </svg>
  `;
};
