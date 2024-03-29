import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Scribble = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Scribble',
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
      aria-labelledby="${`title-Scribble-${count}`}"
      aria-describedby="${`title-Scribble-${count}`}"
    >
      <title id="${`title-Scribble-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Scribble-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M35.89 5.128a1.287 1.287 0 00-.057-1.816 1.284 1.284 0 00-1.816-.059 1.807 1.807 0 00-.156.193l-.016-.02-11.652 11.649.016.022a.906.906 0 00-.193.158 1.327 1.327 0 001.873 1.871 1.217 1.217 0 00.158-.193l.018.018L35.716 5.3l-.02-.017a1.146 1.146 0 00.194-.155zm2.369 2.031c-.959.961-12.717 12.859-12.785 12.928a2.951 2.951 0 01-3.149.039l-1.025-.967L6.909 33.28a2 2 0 00-.436.64l-2.495 8.542a.5.5 0 00.66.655l8.578-2.608a2 2 0 00.613-.417L42.607 11.42zm1.354-2.281l4.141 3.941c.506-.949.549-2.678-1.076-4.311a4.4 4.4 0 00-4.293-1.414c-.238.086.086.406.184.5s.979 1.155 1.044 1.284zm4.563 33.786a14.949 14.949 0 00-10.895-1.3 26.261 26.261 0 00-9.381 4.622c-1.236.9-2.029 1.288-2.359 1.146a3.54 3.54 0 01-.863-1.087 12.312 12.312 0 00-.844-1.206 6.776 6.776 0 00-.96-.952l-2.868 2.923a2.777 2.777 0 01.738.571 8.114 8.114 0 01.56.815 6.072 6.072 0 002.639 2.6 4.323 4.323 0 001.744.366 8.173 8.173 0 004.568-1.947 22.405 22.405 0 017.945-3.958 11.1 11.1 0 017.988.878 2 2 0 001.988-3.471z"
      />
    </svg>
  `;
};
