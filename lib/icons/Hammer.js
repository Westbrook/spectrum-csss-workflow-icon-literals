import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Hammer = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Hammer',
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
      aria-labelledby="${`title-Hammer-${count}`}"
      aria-describedby="${`title-Hammer-${count}`}"
    >
      <title id="${`title-Hammer-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Hammer-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M15.1 5.381L8.125 12.36a2 2 0 00.005 2.834l.472.453-2.074 2.161a1.331 1.331 0 00-1.913-.056l-2.129 2.13a1 1 0 000 1.414L8.13 26.94a1 1 0 001.415 0l2.129-2.129c.781-.781-.032-1.889-.032-1.889l2.186-2.108a2 2 0 002.811-.018l1.189-1.19L41 42.78a2 2 0 002.828 0l1.881-1.88a2 2 0 000-2.828L22.534 14.9l.776-.776a2 2 0 000-2.828l-.939-.939s2.763-3.1 3.343-3.682c2.441-2.441 7.846-.867 8.1-2.117S21.81-1.325 15.1 5.381z"
        fill="currentColor"
      />
    </svg>
  `;
};
