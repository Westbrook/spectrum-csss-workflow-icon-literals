import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Button = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Button',
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
      aria-labelledby="${`title-Button-${count}`}"
      aria-describedby="${`title-Button-${count}`}"
    >
      <title id="${`title-Button-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Button-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36.06 15.9a8.1 8.1 0 010 16.2H11.94a8.1 8.1 0 010-16.2zM36 12H12a12 12 0 100 24h24a12 12 0 000-24z"
      />
      <path d="M35.933 18.1H12.066a5.9 5.9 0 100 11.8h23.867a5.9 5.9 0 100-11.8z" />
    </svg>
  `;
};
