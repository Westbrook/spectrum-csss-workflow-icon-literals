import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ShareLight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Share Light',
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
      aria-labelledby="${`title-ShareLight-${count}`}"
      aria-describedby="${`title-ShareLight-${count}`}"
    >
      <title id="${`title-ShareLight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ShareLight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M45 12h-6.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H42v22H6V16h3.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H3a1 1 0 00-1 1v28a1 1 0 001 1h42a1 1 0 001-1V13a1 1 0 00-1-1z"
      />
      <path
        d="M33.722 10.331L24 0l-9.708 10.331A1 1 0 0015.035 12H20v13.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V12h4.979a1 1 0 00.743-1.669z"
      />
    </svg>
  `;
};
