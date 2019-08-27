import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileHTML = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File HTM L',
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
      aria-labelledby="${`title-FileHTML-${count}`}"
      aria-describedby="${`title-FileHTML-${count}`}"
    >
      <title id="${`title-FileHTML-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileHTML-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-4.793 17.8a1.178 1.178 0 01-.959 1.862h-1.439a1.176 1.176 0 01-.942-.471L13.1 32.833l4.77-6.361a1.176 1.176 0 01.939-.472h1.439a1.178 1.178 0 01.959 1.862l-3.384 5.167zm13.54 1.733h-3.322v-5.039h-4.242v5.043H23.86V26.128h3.322v5.043h4.242v-5.043h3.322z"
      />
    </svg>
  `;
};
