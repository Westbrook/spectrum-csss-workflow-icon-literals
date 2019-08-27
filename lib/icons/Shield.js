import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Shield = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shield',
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
      aria-labelledby="${`title-Shield-${count}`}"
      aria-describedby="${`title-Shield-${count}`}"
    >
      <title id="${`title-Shield-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Shield-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M38 4H10a2 2 0 00-2 2v16.592a20.5 20.5 0 007.81 16.071l6.771 5.358a2.286 2.286 0 002.837 0l6.771-5.358A20.5 20.5 0 0040 22.592V6a2 2 0 00-2-2zM12 8h24L14 30a19.884 19.884 0 01-2-8z"
        fill="currentColor"
      />
    </svg>
  `;
};
