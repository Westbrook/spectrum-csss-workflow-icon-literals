import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SelectSubstract = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Select Substract',
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
      aria-labelledby="${`title-SelectSubstract-${count}`}"
      aria-describedby="${`title-SelectSubstract-${count}`}"
    >
      <title id="${`title-SelectSubstract-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SelectSubstract-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 14h4v8H4zm0 12h4v8H4zm12 0h4v8h-4zM44 6a2 2 0 00-2-2h-4v4h2v2h4zM26 4h8v4h-8zm0 12h8v4h-8zM14 4h8v4h-8zM8 8h2V4H6a2 2 0 00-2 2v4h4zm12 12h2v-4h-4a2 2 0 00-2 2v4h4zM8 40v-2H4v4a2 2 0 002 2h4v-4zm8 0v-2h4v4a2 2 0 01-2 2h-4v-4zm24-24v-2h4v4a2 2 0 01-2 2h-4v-4z"
      />
    </svg>
  `;
};
