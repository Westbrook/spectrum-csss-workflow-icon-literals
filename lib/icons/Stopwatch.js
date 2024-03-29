import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Stopwatch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Stopwatch',
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
      aria-labelledby="${`title-Stopwatch-${count}`}"
      aria-describedby="${`title-Stopwatch-${count}`}"
    >
      <title id="${`title-Stopwatch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Stopwatch-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 6.237V4h1a1 1 0 001-1V1a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1h1v2.026a18.894 18.894 0 00-9.875 3.394l-1.186-1.185.8-.8a1 1 0 000-1.414L10.328 4.6a1 1 0 00-1.414 0L4.671 8.845a1 1 0 000 1.415l1.415 1.414a1 1 0 001.414 0l.611-.611.987.988A19 19 0 1026 6.237zM23 40.1a15.1 15.1 0 119.281-27.011L22.675 22.7c-.021.021-.037.04-.057.062a1.858 1.858 0 102.619 2.634l.068-.066 9.606-9.606A15.1 15.1 0 0123 40.1z"
        fill="currentColor"
      />
    </svg>
  `;
};
