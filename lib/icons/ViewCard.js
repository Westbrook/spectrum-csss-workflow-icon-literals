import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewCard = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View Card',
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
      aria-labelledby="${`title-ViewCard-${count}`}"
      aria-describedby="${`title-ViewCard-${count}`}"
    >
      <title id="${`title-ViewCard-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewCard-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M6 44h8V24H4v18a2 2 0 002 2zM4 8v12h10V6H6a2 2 0 00-2 2zm14 22h10v14H18zm0-24h10v20H18zm14 0v8h10V8a2 2 0 00-2-2zm0 38h8a2 2 0 002-2v-6H32zm0-26h10v14H32z"
      />
    </svg>
  `;
};
