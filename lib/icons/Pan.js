import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pan = ({ width = 24, height = 24, hidden = false, title = 'Pan', desc } = {}) => {
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
      aria-labelledby="${`title-Pan-${count}`}"
      aria-describedby="${`title-Pan-${count}`}"
    >
      <title id="${`title-Pan-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Pan-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.9 13.6c-1.293-.4-2.717.6-3.317 1.81l-3.723 5.757c-.271.547-.969 1.057-1.464.842s-.633-.794-.383-1.723L34.8 9.768a2.717 2.717 0 00-2.364-3.41A2.816 2.816 0 0029.524 8.5l-1.705 9.8s-.124 1.274-1.139 1.23-.905-1.346-.905-1.346V6.714a2.714 2.714 0 10-5.428 0v11.424c0 .717-1.091.7-1.293.11a1495.18 1495.18 0 01-2.987-8.885 2.814 2.814 0 00-3.048-1.945 2.716 2.716 0 00-2.138 3.555l3.7 10.755a9.135 9.135 0 01.339 1.46 2.263 2.263 0 01-1.02 2.489c-.528.3-4.674-3.016-4.674-3.016-2.715-1.848-4.388-1.208-5.09-.377-.746.884-.226 2.337.851 3.456l6.954 7.9a4.847 4.847 0 01.594.835 30.585 30.585 0 002.835 4.361c1.9 2.081 4.593 3.167 8.6 3.167 5.051 0 8.8-1.931 10.133-5.067.905-2.623 1.761-6.165 2.171-7.4.269-.8 6.846-12.342 6.846-12.342.728-1.475.429-3.083-1.22-3.594z"
        fill="currentColor"
      />
    </svg>
  `;
};
