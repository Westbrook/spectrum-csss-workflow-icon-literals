import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Landscape = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Landscape',
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
      aria-labelledby="${`title-Landscape-${count}`}"
      aria-describedby="${`title-Landscape-${count}`}"
    >
      <title id="${`title-Landscape-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Landscape-${count}`}">${desc}</desc>
          `
        : html``}
      <circle cx="24" cy="17.5" r="5" />
      <path
        d="M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zm-2 32h-8v-7a5 5 0 00-5-5H19a5 5 0 00-5 5v7H6V10h36z"
      />
    </svg>
  `;
};
