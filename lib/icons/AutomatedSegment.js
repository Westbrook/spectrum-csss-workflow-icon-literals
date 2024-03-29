import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AutomatedSegment = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Automated Segment',
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
      aria-labelledby="${`title-AutomatedSegment-${count}`}"
      aria-describedby="${`title-AutomatedSegment-${count}`}"
    >
      <title id="${`title-AutomatedSegment-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AutomatedSegment-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.192 18.32l.1 2.872a2.34 2.34 0 001.2 1.959l2.508 1.4-2.872.1a2.34 2.34 0 00-1.959 1.2l-1.4 2.508-.1-2.872a2.34 2.34 0 00-1.2-1.959l-2.506-1.4 2.872-.1a2.34 2.34 0 001.959-1.2zM8.693 0l.145 4a3.264 3.264 0 001.667 2.73L14 8.692l-4 .145A3.264 3.264 0 007.266 10.5L5.308 14l-.145-4A3.264 3.264 0 003.5 7.265L0 5.307l4-.145A3.264 3.264 0 006.734 3.5zM36 10a2 2 0 00-2-2H19.209v1.443a1.957 1.957 0 01-1.913 2l-6.574.237a1.537 1.537 0 00-1.286.785L8 15.021V44a2 2 0 002 2h24a2 2 0 002-2zm-24 4h6v4h-6zm0 8h10v4H12zm0 8h14v4H12zm20 12H12v-4h20zm9.7-39.774l.38 2.848a2.339 2.339 0 001.386 1.832L46.1 8.055l-2.849.38a2.339 2.339 0 00-1.832 1.386l-1.148 2.633-.381-2.849a2.34 2.34 0 00-1.39-1.832l-2.631-1.149 2.848-.38a2.339 2.339 0 001.832-1.386z"
      />
    </svg>
  `;
};
