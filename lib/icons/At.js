import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const At = ({ width = 24, height = 24, hidden = false, title = 'At', desc } = {}) => {
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
      aria-labelledby="${`title-At-${count}`}"
      aria-describedby="${`title-At-${count}`}"
    >
      <title id="${`title-At-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-At-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M31.737 34.212c2.623-.536 8.138-3.266 8.138-11.726 0-9-6.05-14.4-14.4-14.4C16 8.084 8.286 14.455 8.286 26.073c0 8.085 3.641 13.653 10.012 16.919a.514.514 0 01.268.482l-.107 3.534c0 .268-.054.268-.268.214C9.731 43.9 4.217 36.3 4.217 26.288 4.217 13.652 13 4.55 25.633 4.55c10.066 0 18.15 6.532 18.15 17.615 0 10.869-7.977 16.169-17.079 16.169-7.068 0-11.94-3.962-11.94-11.618a12.152 12.152 0 0112.475-12.582 14.245 14.245 0 015.354.856c.214.054.268.108.268.322zM28.9 17.828a7.184 7.184 0 00-2.2-.268c-4.926 0-8.031 3.909-8.031 8.835 0 4.658 2.463 8.352 7.6 8.352a6.635 6.635 0 001.66-.161z"
        fill="currentColor"
      />
    </svg>
  `;
};
