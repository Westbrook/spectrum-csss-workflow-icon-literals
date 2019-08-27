import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FilterHeart = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter Heart',
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
      aria-labelledby="${`title-FilterHeart-${count}`}"
      aria-describedby="${`title-FilterHeart-${count}`}"
    >
      <title id="${`title-FilterHeart-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FilterHeart-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm0 20.334s-8.713-6.724-8.713-10.3a4.752 4.752 0 014.752-4.753A4.987 4.987 0 0136 31.76a4.986 4.986 0 013.961-2.376 4.752 4.752 0 014.752 4.753C44.713 37.71 36 44.434 36 44.434z"
      />
      <path
        d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0038.486 4H1.529A1.464 1.464 0 00.393 6.388l15.686 19.671v18.417a1.464 1.464 0 002.46 1.073l3.256-2.886A14.465 14.465 0 0120.3 36z"
      />
    </svg>
  `;
};
