import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FilterCheck = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter Check',
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
      aria-labelledby="${`title-FilterCheck-${count}`}"
      aria-describedby="${`title-FilterCheck-${count}`}"
    >
      <title id="${`title-FilterCheck-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FilterCheck-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0038.486 4H1.529A1.464 1.464 0 00.393 6.388l15.686 19.671v18.417a1.464 1.464 0 002.46 1.073l3.256-2.886A14.465 14.465 0 0120.3 36z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm-2.229 19.8l-6.133-6.133a.5.5 0 010-.707L29.4 35.3a.5.5 0 01.707 0L34 39.188l8.939-8.94a.5.5 0 01.707 0l1.887 1.887a.5.5 0 010 .707L34.479 43.9a.5.5 0 01-.708 0z"
      />
    </svg>
  `;
};
