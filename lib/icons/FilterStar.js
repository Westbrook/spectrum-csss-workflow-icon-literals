import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FilterStar = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filter Star',
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
      aria-labelledby="${`title-FilterStar-${count}`}"
      aria-describedby="${`title-FilterStar-${count}`}"
    >
      <title id="${`title-FilterStar-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FilterStar-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0038.486 4H1.529A1.464 1.464 0 00.393 6.388l15.686 19.671v18.417a1.464 1.464 0 002.46 1.073l3.256-2.886A14.465 14.465 0 0120.3 36z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm.221 4.052l2 5.29 5.649.267a.236.236 0 01.136.42l-4.413 3.537 1.491 5.455a.236.236 0 01-.357.259L36 40.277l-4.728 3.1a.236.236 0 01-.357-.259l1.491-5.455-4.412-3.533a.236.236 0 01.136-.42l5.649-.267 2-5.29a.236.236 0 01.442-.001z"
      />
    </svg>
  `;
};
