import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Sampler = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Sampler',
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
      aria-labelledby="${`title-Sampler-${count}`}"
      aria-describedby="${`title-Sampler-${count}`}"
    >
      <title id="${`title-Sampler-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Sampler-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.467 4.539c-2.32-2.32-4.706-2.386-6.815-.277L30.447 10.5l-2.016-2.016a2.008 2.008 0 00-2.829 0l-4.092 4.092a2 2 0 000 2.829l.881.88L6.381 32.3a6.593 6.593 0 009.324 9.324l16.01-16.01.886.887a2 2 0 002.829 0l4.091-4.091a2 2 0 00-.011-2.84l-2-1.972 6.257-6.198c2.215-2.216 2.02-4.541-.3-6.861zM13.089 39A2.893 2.893 0 019 34.911L25.007 18.9l4.093 4.093z"
        fill="currentColor"
      />
    </svg>
  `;
};
