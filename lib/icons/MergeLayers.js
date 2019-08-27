import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MergeLayers = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Merge Layers',
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
      aria-labelledby="${`title-MergeLayers-${count}`}"
      aria-describedby="${`title-MergeLayers-${count}`}"
    >
      <title id="${`title-MergeLayers-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MergeLayers-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43.635 32.328L31.6 24l12.036-8.328a.8.8 0 000-1.344L24.652 1.193a1.2 1.2 0 00-1.3 0L4.365 14.328a.8.8 0 000 1.344L16.4 24 4.365 32.328a.8.8 0 000 1.344l18.983 13.135a1.2 1.2 0 001.3 0l18.987-13.135a.8.8 0 000-1.344zm-12.871 1.038l-6.386 6.488a.5.5 0 01-.707 0l-6.435-6.488a.785.785 0 01-.236-.56.8.8 0 01.8-.806H22v-8.97L11 15l13-9.513L37 15l-11 8.03V32h4.2a.8.8 0 01.8.806.785.785 0 01-.236.56z"
        fill="currentColor"
      />
    </svg>
  `;
};
