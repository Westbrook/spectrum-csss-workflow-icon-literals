import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GenderMale = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Gender Male',
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
      aria-labelledby="${`title-GenderMale-${count}`}"
      aria-describedby="${`title-GenderMale-${count}`}"
    >
      <title id="${`title-GenderMale-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GenderMale-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="4.913" r="4.913" />
      <path
        d="M24.29 12h-.58c-4.645 0-8.41 2.257-8.41 6.785V30a1.222 1.222 0 001.243 1.2h2.2l1.374 15.755A1.229 1.229 0 0021.346 48h5.293a1.229 1.229 0 001.232-1.044L29.252 31.2h2.205A1.222 1.222 0 0032.7 30V18.785c0-4.528-3.765-6.785-8.41-6.785z"
      />
    </svg>
  `;
};
