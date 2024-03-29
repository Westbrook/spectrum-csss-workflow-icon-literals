import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DataMapping = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Data Mapping',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-DataMapping-${count}`}"
      aria-describedby="${`title-DataMapping-${count}`}"
    >
      <title id="${`title-DataMapping-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DataMapping-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42.667 22.667a4.662 4.662 0 00-3.922 2.138l-5.748-1.027a8.99 8.99 0 00-3.869-7.174l2.83-6.605L32 10a4.67 4.67 0 10-3.35-1.42l-2.83 6.604a9.023 9.023 0 00-6.782 1.307L8.985 6.438a4.666 4.666 0 10-2.547 2.546L16.49 19.038a9.006 9.006 0 00-.419 9.226l-5.917 4.93a4.66 4.66 0 102.306 2.766l5.917-4.932a9.012 9.012 0 008.026 1.647l4.473 7.27A4.666 4.666 0 1034.667 38a4.7 4.7 0 00-.724.056l-4.324-7.026a9.023 9.023 0 002.747-3.707l5.746 1.026a4.667 4.667 0 104.555-5.682zM32 2.75a2.5 2.5 0 11-2.5 2.5 2.5 2.5 0 012.5-2.5zM4.625 7.125a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zM8 39.75a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm26.65.25a2.5 2.5 0 11-2.5 2.5 2.5 2.5 0 012.5-2.5zm8.1-10.25a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"
        fill="currentColor"
      />
    </svg>
  `;
};
