import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ColorPalette = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Color Palette',
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
      aria-labelledby="${`title-ColorPalette-${count}`}"
      aria-describedby="${`title-ColorPalette-${count}`}"
    >
      <title id="${`title-ColorPalette-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ColorPalette-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30.938 7.112c-5.4-.86-11.13 0-11.924 2.585a2.834 2.834 0 001.6 3.6c1.423.8 3.215 3.3 1.407 5.612a3.5 3.5 0 01-3.862 1.391c-4.632-1.169-9.755-3.561-13.948.427-3.822 3.63-2.263 9.028 1.439 11.966a28.929 28.929 0 0017.938 6.518C35.436 39.211 46 32.226 46 23c0-9.341-8.86-14.9-15.062-15.888zM12.5 33.448a4.7 4.7 0 114.694-4.7 4.7 4.7 0 01-4.694 4.7zM38.233 13.7a2.834 2.834 0 11-2.833 2.833 2.833 2.833 0 012.833-2.833zM23.107 36.05a4.4 4.4 0 114.4-4.4 4.4 4.4 0 01-4.4 4.4zm9.629-1.85a3.714 3.714 0 113.713-3.714 3.714 3.714 0 01-3.713 3.714zm6.692-6.1a3.306 3.306 0 113.305-3.3 3.306 3.306 0 01-3.305 3.306z"
        fill="currentColor"
      />
    </svg>
  `;
};
