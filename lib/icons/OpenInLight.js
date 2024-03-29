import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const OpenInLight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Open In Light',
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
      aria-labelledby="${`title-OpenInLight-${count}`}"
      aria-describedby="${`title-OpenInLight-${count}`}"
    >
      <title id="${`title-OpenInLight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-OpenInLight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 21.5V8h32v32H26.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H43a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v16.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5z"
      />
      <path
        d="M10.241 24a1.008 1.008 0 00-.655 1.716l4.228 4.228-9.842 9.842a.5.5 0 000 .707l3.535 3.535a.5.5 0 00.707 0l9.842-9.842 4.218 4.214a1 1 0 001.706-.655V24z"
      />
    </svg>
  `;
};
