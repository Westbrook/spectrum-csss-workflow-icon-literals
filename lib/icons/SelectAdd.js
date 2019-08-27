import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Add',
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
      aria-labelledby="${`title-SelectAdd-${count}`}"
      aria-describedby="${`title-SelectAdd-${count}`}"
    >
      <title id="${`title-SelectAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 14h4v8H4zm36 12h4v8h-4zM32 6a2 2 0 00-2-2h-4v4h2v2h4zm12 12a2 2 0 00-2-2h-4v4h2v2h4zM20 30a2 2 0 00-2-2h-4v4h2v2h4zM14 4h8v4h-8zm12 36h8v4h-8zM8 8h2V4H6a2 2 0 00-2 2v4h4zm0 20v-2H4v4a2 2 0 002 2h4v-4zm12 12v-2h-4v4a2 2 0 002 2h4v-4zm12-24v-2h-4v4a2 2 0 002 2h4v-4zm8 24v-2h4v4a2 2 0 01-2 2h-4v-4z"
      />
    </svg>
  `;
};
