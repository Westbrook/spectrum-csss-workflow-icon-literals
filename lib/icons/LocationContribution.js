import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const LocationContribution = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Location Contribution',
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
      aria-labelledby="${`title-LocationContribution-${count}`}"
      aria-describedby="${`title-LocationContribution-${count}`}"
    >
      <title id="${`title-LocationContribution-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-LocationContribution-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 10v28a2 2 0 002 2h36a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 00-2 2zm4 2h24v16H8zm0 24v-4h24v4zm32 0h-4V12h4z"
      />
      <path
        d="M24.732 14.536l-5.582 7.975-3.2-2.9a.5.5 0 00-.706.035l-1.121 1.238a.5.5 0 00.035.706l4.792 4.339a.777.777 0 001.159-.131l6.812-9.734a.5.5 0 00-.123-.7l-1.368-.958a.5.5 0 00-.698.13z"
      />
    </svg>
  `;
};
