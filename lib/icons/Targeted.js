import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Targeted = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Targeted',
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
      aria-labelledby="${`title-Targeted-${count}`}"
      aria-describedby="${`title-Targeted-${count}`}"
    >
      <title id="${`title-Targeted-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Targeted-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4a19.978 19.978 0 00-5.209.709l1.625 1.641a5.176 5.176 0 011.507 3.656v.165a14.117 14.117 0 11-11.752 11.752h-.166a5.165 5.165 0 01-3.656-1.508l-1.64-1.624A19.989 19.989 0 1024 4z"
      />
      <path d="M25.685 17.213a5.993 5.993 0 01-8.472 8.472 7 7 0 108.472-8.472z" />
      <path
        d="M8.37 1.05L6.178 6.178 1.05 8.37a.6.6 0 00-.186.98l8.3 8.224a1.2 1.2 0 00.847.349l5.09.007 4.8 4.8a2 2 0 002.828-2.83l-4.8-4.8-.007-5.09a1.2 1.2 0 00-.349-.847L9.35.864a.6.6 0 00-.98.186z"
      />
    </svg>
  `;
};
