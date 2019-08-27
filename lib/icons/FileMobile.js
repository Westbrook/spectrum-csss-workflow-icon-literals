import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileMobile = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Mobile',
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
      aria-labelledby="${`title-FileMobile-${count}`}"
      aria-describedby="${`title-FileMobile-${count}`}"
    >
      <title id="${`title-FileMobile-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileMobile-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16 4v12H4L16 4zm26 10H30a2 2 0 00-2 2v26a2 2 0 002 2h12a2 2 0 002-2V16a2 2 0 00-2-2zm-7 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 27.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm6-5.1H30V20h12z"
      />
      <path
        d="M24 42V16a6.007 6.007 0 016-6h6V6a2 2 0 00-2-2H20v14a2 2 0 01-2 2H4v22a2 2 0 002 2h18.369A5.919 5.919 0 0124 42z"
      />
    </svg>
  `;
};
