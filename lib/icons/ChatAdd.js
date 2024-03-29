import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChatAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chat Add',
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
      aria-labelledby="${`title-ChatAdd-${count}`}"
      aria-describedby="${`title-ChatAdd-${count}`}"
    >
      <title id="${`title-ChatAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChatAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.1 36a15.933 15.933 0 01.139-2h-4.55a2 2 0 00-1.422.593L9.6 39.6V35a1 1 0 00-1-1H4.5a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v3.146a15.881 15.881 0 014-2.365V20a4 4 0 00-4-4H4a4 4 0 00-4 4v14a4 4 0 004 4h2v8.793a.5.5 0 00.5.5.488.488 0 00.35-.148L16 38h4.239a15.936 15.936 0 01-.139-2z"
      />
      <path
        d="M34 18v2.239a15.654 15.654 0 0113.04 4.333A3.963 3.963 0 0048 22V8a4 4 0 00-4-4H22a4 4 0 00-4 4v4h10a6 6 0 016 6zm2 6.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
