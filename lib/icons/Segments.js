import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Segments = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Segments',
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
      aria-labelledby="${`title-Segments-${count}`}"
      aria-describedby="${`title-Segments-${count}`}"
    >
      <title id="${`title-Segments-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Segments-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 18h32a2 2 0 002-2V6a2 2 0 00-2-2H14a2 2 0 00-2 2v2H8a4 4 0 00-4 4v6.367a5.966 5.966 0 000 11.266V36a4 4 0 004 4h4v2a2 2 0 002 2h32a2 2 0 002-2V32a2 2 0 00-2-2H14a2 2 0 00-2 2v4H8v-6.367a5.966 5.966 0 000-11.266V12h4v4a2 2 0 002 2zm-5 6a3 3 0 11-3-3 3 3 0 013 3z"
        fill="currentColor"
      />
    </svg>
  `;
};
