import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const PageExclude = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Page Exclude',
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
      aria-labelledby="${`title-PageExclude-${count}`}"
      aria-describedby="${`title-PageExclude-${count}`}"
    >
      <title id="${`title-PageExclude-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-PageExclude-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.224 38H4V14h36v6.728a15.8 15.8 0 014 1.647V8a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h19.244a15.763 15.763 0 01-1.02-4z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zM44.925 36a8.859 8.859 0 01-1.663 5.158l-12.42-12.42A8.9 8.9 0 0144.925 36zm-17.85 0a8.859 8.859 0 011.663-5.158l12.42 12.42A8.9 8.9 0 0127.075 36z"
      />
    </svg>
  `;
};
