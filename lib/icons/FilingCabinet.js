import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FilingCabinet = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Filing Cabinet',
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
      aria-labelledby="${`title-FilingCabinet-${count}`}"
      aria-describedby="${`title-FilingCabinet-${count}`}"
    >
      <title id="${`title-FilingCabinet-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FilingCabinet-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 6H10a2 2 0 00-2 2v30a2 2 0 002 2h2v3a1 1 0 001 1h2a1 1 0 001-1v-3h16v3a1 1 0 001 1h2a1 1 0 001-1v-3h2a2 2 0 002-2V8a2 2 0 00-2-2zm-2 30H12V24h24zM12 22V10h24v12z"
      />
      <path
        d="M24 14a2.3 2.3 0 102.3 2.3A2.3 2.3 0 0024 14zm0 19.35a2.3 2.3 0 10-2.3-2.3 2.3 2.3 0 002.3 2.3z"
      />
    </svg>
  `;
};
