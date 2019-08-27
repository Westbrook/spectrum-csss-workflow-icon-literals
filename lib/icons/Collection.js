import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Collection = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Collection',
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
      aria-labelledby="${`title-Collection-${count}`}"
      aria-describedby="${`title-Collection-${count}`}"
    >
      <title id="${`title-Collection-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Collection-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 6H2a2 2 0 00-2 2v32a2 2 0 002 2h42a2 2 0 002-2V8a2 2 0 00-2-2zM14 38H4V26h10zm0-16H4V10h10zm14 16H18V26h10zm0-16H18V10h10zm14 16H32V26h10zm0-16H32V10h10z"
        fill="currentColor"
      />
    </svg>
  `;
};
