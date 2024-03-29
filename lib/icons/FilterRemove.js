import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FilterRemove = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter Remove',
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
      aria-labelledby="${`title-FilterRemove-${count}`}"
      aria-describedby="${`title-FilterRemove-${count}`}"
    >
      <title id="${`title-FilterRemove-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FilterRemove-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8.132 17.2a.5.5 0 010 .707l-2.122 2.125a.5.5 0 01-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 01-.707 0l-2.128-2.122a.5.5 0 010-.707l5.3-5.3-5.3-5.3a.5.5 0 010-.707l2.122-2.121a.5.5 0 01.707 0l5.3 5.3 5.3-5.3a.5.5 0 01.707 0l2.122 2.121a.5.5 0 010 .707l-5.3 5.3z"
      />
      <path
        d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0038.486 4H1.529A1.464 1.464 0 00.393 6.388l15.686 19.671v18.417a1.464 1.464 0 002.46 1.073l3.256-2.886A14.465 14.465 0 0120.3 36z"
      />
    </svg>
  `;
};
