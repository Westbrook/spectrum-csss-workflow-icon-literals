import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PagesExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Pages Exclude',
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
      aria-labelledby="${`title-PagesExclude-${count}`}"
      aria-describedby="${`title-PagesExclude-${count}`}"
    >
      <title id="${`title-PagesExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PagesExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M4 8h32V4a2 2 0 00-2-2H2a2 2 0 00-2 2v26a2 2 0 002 2h2z" />
      <path
        d="M20.224 38H12V20h28v.728a15.8 15.8 0 014 1.647V14a2 2 0 00-2-2H10a2 2 0 00-2 2v26a2 2 0 002 2h11.244a15.763 15.763 0 01-1.02-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
