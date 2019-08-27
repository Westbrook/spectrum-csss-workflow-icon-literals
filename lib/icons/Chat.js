import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Chat = ({ width = 24, height = 24, hidden = false, title = 'Chat', desc } = {}) => {
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
      aria-labelledby="${`title-Chat-${count}`}"
      aria-describedby="${`title-Chat-${count}`}"
    >
      <title id="${`title-Chat-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Chat-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4.5 20h21a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-9.811a2 2 0 00-1.422.593L9.6 39.6V35a1 1 0 00-1-1H4.5a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5zM0 20v14a4 4 0 004 4h2v8.793a.5.5 0 00.5.5.486.486 0 00.35-.148L16 38h10a4 4 0 004-4V20a4 4 0 00-4-4H4a4 4 0 00-4 4z"
      />
      <path
        d="M28 12H18V8a4 4 0 014-4h22a4 4 0 014 4v14a4 4 0 01-4 4h-2v6.793a.5.5 0 01-.853.354L34 26v-8a6 6 0 00-6-6z"
      />
    </svg>
  `;
};
