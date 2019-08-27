import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CCLibrary = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'CCLibrary',
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
      aria-labelledby="${`title-CCLibrary-${count}`}"
      aria-describedby="${`title-CCLibrary-${count}`}"
    >
      <title id="${`title-CCLibrary-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CCLibrary-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43 10h-5V5a1 1 0 00-1-1H5a1 1 0 00-1 1v32a1 1 0 001 1h5v5a1 1 0 001 1h32a1 1 0 001-1V11a1 1 0 00-1-1zm-33 1v23H8V8h26v2H11a1 1 0 00-1 1zm30 29H14V14h15v14l4-3.5 4 3.5V14h3z"
        fill="currentColor"
      />
    </svg>
  `;
};
