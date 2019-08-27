import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FullScreenExit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Full Screen Exit',
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
      aria-labelledby="${`title-FullScreenExit-${count}`}"
      aria-describedby="${`title-FullScreenExit-${count}`}"
    >
      <title id="${`title-FullScreenExit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FullScreenExit-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="24" rx="2" ry="2" width="28" x="10" y="12" />
      <path
        d="M6 2.5V8H.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H10V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zM42 8V2.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V12h9.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM0 36.5v3a.5.5 0 00.5.5H6v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V36H.5a.5.5 0 00-.5.5zM42 40h5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H38v9.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5z"
      />
    </svg>
  `;
};
