import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Journey = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Journey',
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
      aria-labelledby="${`title-Journey-${count}`}"
      aria-describedby="${`title-Journey-${count}`}"
    >
      <title id="${`title-Journey-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Journey-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39 29.5a3.5 3.5 0 11-3.5 3.5 3.5 3.5 0 013.5-3.5zm0-5.5a9 9 0 00-9 9c0 4.971 9 15 9 15s9-10.029 9-15a9 9 0 00-9-9z"
      />
      <path
        d="M27.407 37.94A3.989 3.989 0 0124 34V14a4 4 0 014-4h6.349a6 6 0 100-4H28a8 8 0 00-8 8v8h-6.349a6 6 0 100 4H20v8a8 8 0 008 8h1.786a33.687 33.687 0 01-2.379-4.06zM40 5.6A2.4 2.4 0 1137.6 8 2.4 2.4 0 0140 5.6zM8 26.4a2.4 2.4 0 112.4-2.4A2.4 2.4 0 018 26.4z"
      />
    </svg>
  `;
};
