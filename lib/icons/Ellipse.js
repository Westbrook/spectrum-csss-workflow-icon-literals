import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Ellipse = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Ellipse',
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
      aria-labelledby="${`title-Ellipse-${count}`}"
      aria-describedby="${`title-Ellipse-${count}`}"
    >
      <title id="${`title-Ellipse-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Ellipse-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 9.8c10.036 0 18.2 6.37 18.2 14.2S34.036 38.2 24 38.2 5.8 31.83 5.8 24 13.964 9.8 24 9.8zM24 6C11.85 6 2 14.059 2 24s9.85 18 22 18 22-8.059 22-18S36.15 6 24 6z"
        fill="currentColor"
      />
    </svg>
  `;
};
