import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileShare = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Share',
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
      aria-labelledby="${`title-FileShare-${count}`}"
      aria-describedby="${`title-FileShare-${count}`}"
    >
      <title id="${`title-FileShare-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileShare-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M20 4v12H8L20 4z" />
      <path
        d="M16 31a5 5 0 015-5h3.139a4.969 4.969 0 011.186-2.348L34 14.029l6 6.645V6a2 2 0 00-2-2H24v14a2 2 0 01-2 2H8v22a2 2 0 002 2h6z"
      />
      <path
        d="M48 31v16a1 1 0 01-1 1H21a1 1 0 01-1-1V31a1 1 0 011-1h7v4h-4v10h20V34h-4v-4h7a1 1 0 011 1zm-8.278-4.669L34 20l-5.708 6.331A1 1 0 0029.035 28H32v11.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V28h2.979a1 1 0 00.743-1.669z"
      />
    </svg>
  `;
};
