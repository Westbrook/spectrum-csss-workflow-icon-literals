import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Anchor = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Anchor',
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
      aria-labelledby="${`title-Anchor-${count}`}"
      aria-describedby="${`title-Anchor-${count}`}"
    >
      <title id="${`title-Anchor-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Anchor-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45.274 31.171L39.4 24l-6.117 7.171a.5.5 0 00.377.829h3.727S32.657 38.584 26 38.584V22h3a1 1 0 001-1v-2a1 1 0 00-1-1h-3v-2.7a7 7 0 10-6 0V18h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v16.584C13.032 38.584 8.613 32 8.613 32h3.515a.5.5 0 00.376-.829L6.6 24 .726 31.171A.5.5 0 001.1 32H4c2.886 6.986 9.86 12 19 12s16.114-5.014 19-12h2.9a.5.5 0 00.374-.829zM19.5 8.8a3.5 3.5 0 113.5 3.5 3.5 3.5 0 01-3.5-3.5z"
        fill="currentColor"
      />
    </svg>
  `;
};
