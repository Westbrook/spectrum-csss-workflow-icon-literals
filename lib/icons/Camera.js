import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Camera = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Camera',
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
      aria-labelledby="${`title-Camera-${count}`}"
      aria-describedby="${`title-Camera-${count}`}"
    >
      <title id="${`title-Camera-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Camera-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="25" r="7" />
      <path
        d="M44 12h-6.75a2 2 0 01-1.664-.891l-4.992-4.218A2 2 0 0028.93 6h-9.86a2 2 0 00-1.664.891l-4.867 4.218a2 2 0 01-1.664.891H4a2 2 0 00-2 2v26a2 2 0 002 2h40a2 2 0 002-2V14a2 2 0 00-2-2zM24 36.3A11.3 11.3 0 1135.3 25 11.3 11.3 0 0124 36.3z"
      />
    </svg>
  `;
};
