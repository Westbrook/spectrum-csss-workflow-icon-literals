import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Tableau = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Tableau',
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
      aria-labelledby="${`title-Tableau-${count}`}"
      aria-describedby="${`title-Tableau-${count}`}"
    >
      <title id="${`title-Tableau-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Tableau-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 22h-6v-6h-4v6h-6v4h6v6h4v-6h6v-4zM28 5h-3V2h-2v3h-3v2h3v3h2V7h3V5zm0 36h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm18-18h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-36 0H7v-3H5v3H2v2h3v3h2v-3h3v-2zm31.6-12.1h-4.5V6.4h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3zm-23.2 0h-4.5V6.4h-3v4.5H6.4v3h4.5v4.5h3v-4.5h4.5v-3zm23.2 23.2h-4.5v-4.5h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3zm-23.2 0h-4.5v-4.5h-3v4.5H6.4v3h4.5v4.5h3v-4.5h4.5v-3z"
      />
    </svg>
  `;
};
