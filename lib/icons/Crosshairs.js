import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Crosshairs = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Crosshairs',
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
      aria-labelledby="${`title-Crosshairs-${count}`}"
      aria-describedby="${`title-Crosshairs-${count}`}"
    >
      <title id="${`title-Crosshairs-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Crosshairs-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4a20 20 0 1020 20A20 20 0 0024 4zm2 35.862V32h-4v7.862A15.989 15.989 0 018.138 26H16v-4H8.138A15.989 15.989 0 0122 8.138V16h4V8.138A15.989 15.989 0 0139.862 22H32v4h7.862A15.989 15.989 0 0126 39.862z"
      />
      <circle cx="24" cy="24" r="2.2" />
    </svg>
  `;
};
