import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Breakdown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Breakdown',
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
      aria-labelledby="${`title-Breakdown-${count}`}"
      aria-describedby="${`title-Breakdown-${count}`}"
    >
      <title id="${`title-Breakdown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Breakdown-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41 10a1 1 0 001-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v6a1 1 0 001 1h7v34a2 2 0 002 2h27a1 1 0 001-1v-4a1 1 0 00-1-1H16v-4h25a1 1 0 001-1v-4a1 1 0 00-1-1H16v-4h25a1 1 0 001-1v-4a1 1 0 00-1-1H16V10z"
        fill="currentColor"
      />
    </svg>
  `;
};
