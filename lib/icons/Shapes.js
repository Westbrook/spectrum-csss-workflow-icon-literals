import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Shapes = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Shapes',
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
      aria-labelledby="${`title-Shapes-${count}`}"
      aria-describedby="${`title-Shapes-${count}`}"
    >
      <title id="${`title-Shapes-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Shapes-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M25.224 40.451a14.112 14.112 0 01-9.108-10.413l-.035-.156H4.323a.614.614 0 01-.539-.313.6.6 0 010-.617L16.438 6.806a.62.62 0 011.076 0l4.717 8.258.178-.114a13.421 13.421 0 013.614-1.663 14.283 14.283 0 11-.8 27.166zM19.18 30.136a11.3 11.3 0 104.676-12.615l-.158.1 6.472 11.33a.621.621 0 01-.537.928H19.106z"
        fill="currentColor"
      />
    </svg>
  `;
};
