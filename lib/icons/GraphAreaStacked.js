import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphAreaStacked = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Area Stacked',
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
      aria-labelledby="${`title-GraphAreaStacked-${count}`}"
      aria-describedby="${`title-GraphAreaStacked-${count}`}"
    >
      <title id="${`title-GraphAreaStacked-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphAreaStacked-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.743 22.564L44 31.078v12.5H4v-20l12.5 15 4.168-6.252a1 1 0 011.664 0l4.168 6.252L38.035 22.43a1 1 0 011.708.134z"
      />
      <path
        d="M16.144 32.324L19 28.033a3 3 0 014.992 0l2.617 3.926 10.1-14.136a3 3 0 015.124.4L44 22.555v-11.9l-4.141-6.21a1 1 0 00-1.68.025L26.5 23.156 22.332 16.9a1 1 0 00-1.664 0L16.5 23.156 4 8v9.751z"
      />
    </svg>
  `;
};
