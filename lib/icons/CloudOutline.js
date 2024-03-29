import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloudOutline = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Cloud Outline',
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
      aria-labelledby="${`title-CloudOutline-${count}`}"
      aria-describedby="${`title-CloudOutline-${count}`}"
    >
      <title id="${`title-CloudOutline-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CloudOutline-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27.2 10h.111a7.686 7.686 0 017.04 10.817 9.749 9.749 0 011.821-.179 6.7 6.7 0 013.112.7 5.571 5.571 0 01-.4 10.069 10.9 10.9 0 01-4.281.59h-.128L10.35 31.98a5.716 5.716 0 01-3.05-.573c-2.23-1.391-1.386-4.825 1.053-5.36a4.333 4.333 0 01.928-.1 8.085 8.085 0 011.877.264 6.549 6.549 0 011.175-7.262 6.52 6.52 0 014.628-1.885 6.222 6.222 0 012.608.559 7.917 7.917 0 014.865-7.107A7.49 7.49 0 0127.2 10zm0-4a11.438 11.438 0 00-4.25.8 11.955 11.955 0 00-6.393 6.272A10.248 10.248 0 006.589 22.4 7.034 7.034 0 002.1 27.856 6.693 6.693 0 005.178 34.8a9.416 9.416 0 005.173 1.182l12.063.008 12.062.01h.131a14.455 14.455 0 005.843-.908 9.571 9.571 0 00.681-17.3 9.862 9.862 0 00-2.192-.826 11.88 11.88 0 00-3.21-7.406A11.886 11.886 0 0027.367 6z"
        fill="currentColor"
      />
    </svg>
  `;
};
