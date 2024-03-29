import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const OpenIn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Open In',
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
      aria-labelledby="${`title-OpenIn-${count}`}"
      aria-describedby="${`title-OpenIn-${count}`}"
    >
      <title id="${`title-OpenIn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-OpenIn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8 19V8h32v32H29a1 1 0 00-1 1v2a1 1 0 001 1h13a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v13a1 1 0 001 1h2a1 1 0 001-1z"
      />
      <path
        d="M23.5 24H10a1 1 0 00-1 1.007.978.978 0 00.295.7l3.671 3.672-9.38 9.379a1 1 0 000 1.414l4.242 4.242a1 1 0 001.414 0l9.379-9.378 3.672 3.671a.978.978 0 00.7.3A1 1 0 0024 38V24.5a.5.5 0 00-.5-.5z"
      />
    </svg>
  `;
};
