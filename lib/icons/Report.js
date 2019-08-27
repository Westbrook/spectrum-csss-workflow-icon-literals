import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Report = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Report',
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
      aria-labelledby="${`title-Report-${count}`}"
      aria-describedby="${`title-Report-${count}`}"
    >
      <title id="${`title-Report-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Report-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 4H12a2 2 0 00-2 2v36a2 2 0 002 2h24a2 2 0 002-2V6a2 2 0 00-2-2zM22 15a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1zm-8 4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1zm16 20a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h14a1 1 0 011 1zm4-8a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm0-8a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
