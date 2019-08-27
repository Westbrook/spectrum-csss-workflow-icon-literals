import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PlayCircle = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Play Circle',
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
      aria-labelledby="${`title-PlayCircle-${count}`}"
      aria-describedby="${`title-PlayCircle-${count}`}"
    >
      <title id="${`title-PlayCircle-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PlayCircle-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm10.531 20.762L19.486 33.7a2 2 0 01-1.06.3H17a1 1 0 01-1-1V15a1 1 0 011-1h1.426a2 2 0 011.06.3l15.045 8.834a1 1 0 010 1.728z"
        fill="currentColor"
      />
    </svg>
  `;
};
