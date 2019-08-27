import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectContainer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Container',
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
      aria-labelledby="${`title-SelectContainer-${count}`}"
      aria-describedby="${`title-SelectContainer-${count}`}"
    >
      <title id="${`title-SelectContainer-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectContainer-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 12H14a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V14a2 2 0 00-2-2zM20 40h-4v-4h4zm0-8h-4v-4h4zm20 8H24v-4h16zm0-8H24v-4h16zm0-8H16v-8h24z"
      />
      <path d="M10 8h26V6a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h2V10a2 2 0 012-2z" />
    </svg>
  `;
};
