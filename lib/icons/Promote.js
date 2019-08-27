import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Promote = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Promote',
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
      aria-labelledby="${`title-Promote-${count}`}"
      aria-describedby="${`title-Promote-${count}`}"
    >
      <title id="${`title-Promote-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Promote-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10 10a8 8 0 000 16h8V10zm9.438 36h-3.876a2 2 0 01-1.941-1.515L10 30h8l3.379 13.515A2 2 0 0119.438 46zM43.9 33.379A31.355 31.355 0 0024 26h-2V10h2a31.969 31.969 0 0019.9-7.379A1.78 1.78 0 0146 4.562v26.876a1.78 1.78 0 01-2.1 1.941z"
      />
    </svg>
  `;
};
