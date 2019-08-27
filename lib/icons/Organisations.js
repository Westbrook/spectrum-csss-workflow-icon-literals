import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Organisations = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Organisations',
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
      aria-labelledby="${`title-Organisations-${count}`}"
      aria-describedby="${`title-Organisations-${count}`}"
    >
      <title id="${`title-Organisations-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Organisations-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H18a2 2 0 00-2 2v10h12v28h14a2 2 0 002-2V6a2 2 0 00-2-2zm-14 8h-8V8h8zm12 24h-8v-4h8zm0-8h-8v-4h8zm0-8h-8v-4h8zm0-8h-8V8h8z"
      />
      <path
        d="M4 22v20a2 2 0 002 2h16a2 2 0 002-2V22a2 2 0 00-2-2H6a2 2 0 00-2 2zm8 20H6v-4h6zm0-8H6v-4h6zm0-8H6v-4h6zm10 8h-6v-4h6zm0-8h-6v-4h6z"
      />
    </svg>
  `;
};
