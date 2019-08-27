import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextSizeAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Size Add',
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
      aria-labelledby="${`title-TextSizeAdd-${count}`}"
      aria-describedby="${`title-TextSizeAdd-${count}`}"
    >
      <title id="${`title-TextSizeAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextSizeAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19 20a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3h-4v14h3a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h3V24H4v2.973a1 1 0 01-1 1H1a1 1 0 01-1-1V21a1 1 0 011-1zm9 2.082a15.773 15.773 0 016-2.042V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2H16a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10zm8 2.018A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
