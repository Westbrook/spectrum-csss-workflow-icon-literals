import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageCarousel = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Carousel',
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
      aria-labelledby="${`title-ImageCarousel-${count}`}"
      aria-describedby="${`title-ImageCarousel-${count}`}"
    >
      <title id="${`title-ImageCarousel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageCarousel-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="28" rx="2" ry="2" width="28" x="10" y="4" />
      <path d="M2 28h4V8H2a2 2 0 00-2 2v16a2 2 0 002 2zm44 0h-4V8h4a2 2 0 012 2v16a2 2 0 01-2 2z" />
      <circle cx="20" cy="42" r="3" />
      <circle cx="28" cy="42" r="2.25" />
      <circle cx="12" cy="42" r="2.25" />
      <circle cx="36" cy="42" r="2.25" />
    </svg>
  `;
};
