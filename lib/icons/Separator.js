import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Separator = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Separator',
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
      aria-labelledby="${`title-Separator-${count}`}"
      aria-describedby="${`title-Separator-${count}`}"
    >
      <title id="${`title-Separator-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Separator-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M38 4H10a2 2 0 00-2 2v12h32V6a2 2 0 00-2-2zM8 42a2 2 0 002 2h28a2 2 0 002-2V30H8z" />
      <rect height="4" rx="1" ry="1" width="44" x="2" y="22" />
    </svg>
  `;
};
