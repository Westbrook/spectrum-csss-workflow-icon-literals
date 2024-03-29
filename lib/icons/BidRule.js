import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const BidRule = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Bid Rule',
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
      aria-labelledby="${`title-BidRule-${count}`}"
      aria-describedby="${`title-BidRule-${count}`}"
    >
      <title id="${`title-BidRule-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-BidRule-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 16l8-8 8 8-8 8zM33.32 27.73l10.41-10.41a1.052 1.052 0 011.487 0l1.485 1.484a1.052 1.052 0 010 1.488l-10.409 10.41a1.051 1.051 0 01-1.485.002l-1.485-1.484a1.052 1.052 0 01-.003-1.49zM17.338 11.748l10.41-10.41a1.052 1.052 0 011.488 0l1.485 1.485a1.051 1.051 0 010 1.487L20.309 14.72a1.052 1.052 0 01-1.487 0l-1.485-1.485a1.052 1.052 0 010-1.488zM5.414 45.414l-2.828-2.828a2 2 0 010-2.828L24 20l4 4L8.242 45.414a2 2 0 01-2.828 0zM46 42v-2a2 2 0 00-2-2H32a2 2 0 00-2 2v2h-1a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
