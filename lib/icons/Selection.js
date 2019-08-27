import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Selection = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Selection',
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
      aria-labelledby="${`title-Selection-${count}`}"
      aria-describedby="${`title-Selection-${count}`}"
    >
      <title id="${`title-Selection-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Selection-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 4h8v4h-8zm0 36h8v4h-8zM26 4h8v4h-8zm0 36h8v4h-8zM6 4a2 2 0 00-2 2v4h4V8h2V4zM4 14h4v8H4zm0 12h4v8H4zm4 14v-2H4v4a2 2 0 002 2h4v-4zM42 4h-4v4h2v2h4V6a2 2 0 00-2-2zm-2 10h4v8h-4zm0 26h-2v4h4a2 2 0 002-2v-4h-4zm0-14h4v8h-4z"
      />
    </svg>
  `;
};
