import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CollectionLink = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Collection Link',
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
      aria-labelledby="${`title-CollectionLink-${count}`}"
      aria-describedby="${`title-CollectionLink-${count}`}"
    >
      <title id="${`title-CollectionLink-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CollectionLink-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19.451 38H18V26h10v1.608l2.915-2.916L33.608 22H32V10h10v9.115a10.019 10.019 0 014 1.339V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h17.117a10.18 10.18 0 01.334-4zM18 10h10v12H18zm-4 28H4V26h10zm0-16H4V10h10z"
      />
      <path
        d="M32.865 35.618a3.18 3.18 0 00.619.9 3.221 3.221 0 004.549 0l5.308-5.308a3.217 3.217 0 10-4.55-4.55l-1.2 1.2a8.6 8.6 0 00-3.9-.654l2.826-2.826a6.434 6.434 0 019.1 9.1l-5.308 5.308a6.4 6.4 0 01-9.789-.826zm-3.173-4.41l-5.308 5.308a6.434 6.434 0 009.1 9.1l2.825-2.826a8.605 8.605 0 01-3.9-.654l-1.2 1.2a3.217 3.217 0 11-4.55-4.55l5.308-5.308a3.221 3.221 0 014.55 0 3.179 3.179 0 01.618.9l2.346-2.346a6.4 6.4 0 00-9.789-.826z"
      />
    </svg>
  `;
};
