import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphDonutAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Donut Add',
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
      aria-labelledby="${`title-GraphDonutAdd-${count}`}"
      aria-describedby="${`title-GraphDonutAdd-${count}`}"
    >
      <title id="${`title-GraphDonutAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphDonutAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M18.388 15.751a9.931 9.931 0 012.858-1.363 1.012 1.012 0 00.754-.962V5.25a1.006 1.006 0 00-1.142-1 19.9 19.9 0 00-10.13 4.816 1 1 0 00.06 1.519l6.388 5.142a1.009 1.009 0 001.212.024zM6.563 14.215a19.991 19.991 0 0014.3 29.538.988.988 0 001.052-.6 15.544 15.544 0 01-1.468-9.837A9.976 9.976 0 0114 24a9.759 9.759 0 01.746-3.715 1.011 1.011 0 00-.282-1.184l-6.4-5.152a1 1 0 00-1.501.266zM36.1 24.1A11.9 11.9 0 1048 36a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5zM33.291 20.362a15.662 15.662 0 0110.625 1.8A20.008 20.008 0 0027.14 4.247a1 1 0 00-1.14 1v8.177a1.009 1.009 0 00.756.961 10.006 10.006 0 016.535 5.977z"
      />
    </svg>
  `;
};
