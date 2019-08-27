import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const HotFixes = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Hot Fixes',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-HotFixes-${count}`}"
      aria-describedby="${`title-HotFixes-${count}`}"
    >
      <title id="${`title-HotFixes-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-HotFixes-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19.7 3.492a1 1 0 00-1.741.872 18.362 18.362 0 01.508 7.4c-.607 3.15-2.079 5.416-3.881 8.219a35.643 35.643 0 00-3.825 7.406 13.882 13.882 0 1026.989 4.59v-.05c-.095-6.089-3.606-14.37-7.343-20.278a1 1 0 00-1.846.547c.223 10.254-5.384 13.921-5.384 13.921S27.693 13.332 19.7 3.492z"
        fill="currentColor"
      />
    </svg>
  `;
};
