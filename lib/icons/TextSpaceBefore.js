import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextSpaceBefore = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Space Before',
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
      aria-labelledby="${`title-TextSpaceBefore-${count}`}"
      aria-describedby="${`title-TextSpaceBefore-${count}`}"
    >
      <title id="${`title-TextSpaceBefore-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextSpaceBefore-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="28" x="16" y="40" />
      <rect height="4" rx="1" ry="1" width="28" x="16" y="32" />
      <rect height="4" rx="1" ry="1" width="28" x="16" y="24" />
      <path
        d="M43 4H17a1 1 0 00-1 1v14a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1zm-3 12H20V8h20zM4.864 2.315A.5.5 0 004 2.659v18.682a.5.5 0 00.864.343L14 12z"
      />
    </svg>
  `;
};
