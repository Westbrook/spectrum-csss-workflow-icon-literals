import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileTxt = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Txt',
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
      aria-labelledby="${`title-FileTxt-${count}`}"
      aria-describedby="${`title-FileTxt-${count}`}"
    >
      <title id="${`title-FileTxt-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileTxt-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm8 19a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm0-6a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm0-6a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1z"
      />
    </svg>
  `;
};
