import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CollectionCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Collection Check',
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
      aria-labelledby="${`title-CollectionCheck-${count}`}"
      aria-describedby="${`title-CollectionCheck-${count}`}"
    >
      <title id="${`title-CollectionCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CollectionCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.627 38H18V26h4.275a15.959 15.959 0 013.315-4H18V10h10v10.275a15.8 15.8 0 014-1.648V10h10v9.28a15.864 15.864 0 014 2.365V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h20.275a15.8 15.8 0 01-1.648-4zM14 38H4V26h10zm0-16H4V10h10z"
      />
      <path
        d="M36 22.1A11.9 11.9 0 1047.9 34 11.9 11.9 0 0036 22.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 33.3a.5.5 0 01.707 0L34 37.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 41.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
