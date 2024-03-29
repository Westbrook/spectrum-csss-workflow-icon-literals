import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextBulletedHierarchyExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Bulleted Hierarchy Exclude',
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
      aria-labelledby="${`title-TextBulletedHierarchyExclude-${count}`}"
      aria-describedby="${`title-TextBulletedHierarchyExclude-${count}`}"
    >
      <title id="${`title-TextBulletedHierarchyExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextBulletedHierarchyExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.865 8.865 0 01-1.663 5.159l-12.42-12.421A8.9 8.9 0 0144.925 36zm-17.85 0a8.862 8.862 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
      <rect height="4" rx="1" ry="1" width="28" x="12" y="8" />
      <circle cx="4" cy="8" r="4" />
      <circle cx="10" cy="24" r="4" />
      <circle cx="10" cy="40" r="4" />
      <path
        d="M25.6 24H19a1 1 0 00-1 1v2a1 1 0 001 1h3.281a16 16 0 013.319-4zm-4.971 16H19a1 1 0 00-1 1v2a1 1 0 001 1h3.281a15.849 15.849 0 01-1.652-4z"
      />
    </svg>
  `;
};
