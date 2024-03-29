import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphTrendAlert = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Trend Alert',
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
      aria-labelledby="${`title-GraphTrendAlert-${count}`}"
      aria-describedby="${`title-GraphTrendAlert-${count}`}"
    >
      <title id="${`title-GraphTrendAlert-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphTrendAlert-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.842 41.685l-8.411-16.823a1.6 1.6 0 00-2.861 0l-8.412 16.823A1.6 1.6 0 0024.589 44h16.822a1.6 1.6 0 001.431-2.315zM31.8 29.45c0-.249.268-.45.6-.45h1.2c.332 0 .6.2.6.45v8.1c0 .249-.268.45-.6.45h-1.2c-.332 0-.6-.2-.6-.45zM34.5 42a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5z"
      />
      <path
        d="M20.543 37.971l2.936-5.871 4.776-14.465 1.535 3.391a5.521 5.521 0 018.148 1.948l5.882-8.4A1 1 0 0044 14V9.657a1 1 0 00-1.819-.574l-7.749 11.07L28.6 8.5a1 1 0 00-1.835.105l-7.222 22.329-6.714-6.346a1 1 0 00-1.347-.061l-7.123 5.936a1 1 0 00-.359.768v2.575a1 1 0 001.641.769l6.176-5.146 8.283 8.283a1 1 0 00.443.259z"
      />
    </svg>
  `;
};
