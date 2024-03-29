import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const GraphDonut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Graph Donut',
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
      aria-labelledby="${`title-GraphDonut-${count}`}"
      aria-describedby="${`title-GraphDonut-${count}`}"
    >
      <title id="${`title-GraphDonut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-GraphDonut-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 5.248v8.177a1.009 1.009 0 00.756.961 10 10 0 010 19.228 1.009 1.009 0 00-.756.961v8.177a1 1 0 001.14 1 20 20 0 000-39.505A1 1 0 0026 5.248zm-7.612 10.503a9.927 9.927 0 012.858-1.364 1.011 1.011 0 00.754-.961V5.25a1.006 1.006 0 00-1.142-1 19.9 19.9 0 00-10.13 4.816 1 1 0 00.059 1.519l6.388 5.142a1.009 1.009 0 001.213.024zM14 24a9.759 9.759 0 01.746-3.715 1.012 1.012 0 00-.283-1.184l-6.4-5.152a1 1 0 00-1.5.266 19.99 19.99 0 0014.3 29.538 1 1 0 001.14-1v-8.178a1.009 1.009 0 00-.756-.961A10 10 0 0114 24z"
      />
    </svg>
  `;
};
