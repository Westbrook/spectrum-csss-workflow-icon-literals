import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const NewItem = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'New Item',
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
      aria-labelledby="${`title-NewItem-${count}`}"
      aria-describedby="${`title-NewItem-${count}`}"
    >
      <title id="${`title-NewItem-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-NewItem-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M40 6H8a2 2 0 00-2 2v14h18a2 2 0 012 2v18h14a2 2 0 002-2V8a2 2 0 00-2-2z" />
      <path d="M22 42h-.086a1 1 0 01-.707-.293L6.293 26.793A1 1 0 016 26.086V26h16z" />
    </svg>
  `;
};
