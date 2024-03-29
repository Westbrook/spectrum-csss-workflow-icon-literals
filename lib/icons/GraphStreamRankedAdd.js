import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphStreamRankedAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Stream Ranked Add',
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
      aria-labelledby="${`title-GraphStreamRankedAdd-${count}`}"
      aria-describedby="${`title-GraphStreamRankedAdd-${count}`}"
    >
      <title id="${`title-GraphStreamRankedAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphStreamRankedAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26.438 16.575c-4.077 0-7-4.986-12.466-4.986-7.455 0-6.643 4.986-9.973 4.986v7.974c.91 0 1.57-.57 2.756-1.66 1.523-1.4 3.611-3.326 7.217-3.326 3.258 0 5.518 1.531 7.51 2.881a12.033 12.033 0 003.685 1.942 15.983 15.983 0 012.041-1.629 48.718 48.718 0 00.71-5.661c.041-.493.086-1 .133-1.519a2.09 2.09 0 01-1.613.998zm9.974-10.466c-3.3 0-3.951 4.693-4.508 11.322a95.68 95.68 0 01-.318 3.3 15.341 15.341 0 016.31-.511 8.63 8.63 0 013.5-.665h2.492V6.109zM13.973 23.562c-2.045 0-3.131 1-4.506 2.268S6.514 28.548 4 28.548v5.969A10.939 10.939 0 018.947 35.8a10.494 10.494 0 005.025 1.215 20.781 20.781 0 005.49-.9l.64-.163a15.8 15.8 0 012.373-8.275 21.509 21.509 0 01-3.237-1.914C17.5 24.578 16 23.562 13.973 23.562zm0 17.449c-3.809 0-8.76-2.494-9.973-2.494V44h18.275a15.757 15.757 0 01-1.724-4.293 21.463 21.463 0 01-6.578 1.304zM24.1 36A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm13.4-8a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5z"
      />
    </svg>
  `;
};
