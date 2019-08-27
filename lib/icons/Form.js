import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Form = ({ width = 24, height = 24, hidden = false, title = 'Form', desc } = {}) => {
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
      aria-labelledby="${`title-Form-${count}`}"
      aria-describedby="${`title-Form-${count}`}"
    >
      <title id="${`title-Form-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Form-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="40" x="4" y="8" />
      <rect height="4" rx="1" ry="1" width="40" x="4" y="18" />
      <path
        d="M40 32v6H8v-6zm2.677-4H5.323A1.323 1.323 0 004 29.323v11.354A1.323 1.323 0 005.323 42h37.354A1.323 1.323 0 0044 40.677V29.323A1.323 1.323 0 0042.677 28z"
      />
    </svg>
  `;
};
