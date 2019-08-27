import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Deselect = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Deselect',
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
      aria-labelledby="${`title-Deselect-${count}`}"
      aria-describedby="${`title-Deselect-${count}`}"
    >
      <title id="${`title-Deselect-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Deselect-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="56" rx="1" ry="1" transform="rotate(-45 24 24)" width="4" x="22" y="-4" />
      <path
        d="M5.516 14H4v8h4v-5.516L5.516 14zM8 40v-2H4v5a1 1 0 001 1h5v-4zM4 26h4v8H4zm10 14h8v4h-8zm20 2.484L31.516 40H26v4h8v-1.516zM22 4h-8v1.516L16.484 8H22V4zm4 0h8v4h-8zm17 0h-5v4h2v2h4V5a1 1 0 00-1-1zm-3 10h4v8h-4zm4 20v-8h-4v5.516L42.484 34H44z"
      />
    </svg>
  `;
};
